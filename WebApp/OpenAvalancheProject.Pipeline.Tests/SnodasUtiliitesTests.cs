using System;
using System.Collections.Generic;
using System.IO;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenAvalancheProject.Pipeline.Utilities;
using OSGeo.GDAL;
using System.Linq;

namespace OpenAvalancheProject.Pipeline.Tests
{
    [TestClass]
    public class SnodasUtiliitesTests
    {
        [TestMethod]
        public void TestExtractFiles()
        {
            string snodasFileToUncompress = "../../TestFiles/SNODAS_20171210.tar";
            var files = SnodasUtilities.UnpackSnodasArchive(snodasFileToUncompress);
            Assert.AreEqual(16, files.Count, "Incorrect total number of files");
            Assert.IsTrue(File.Exists(files[0]), $"File {files[0]} doesn't exist");
            int countHdr = 0, countDat = 0;
            foreach(var f in files)
            {
                var extension = f.Split('.')[1];
                if(extension == "Hdr")
                {
                    countHdr++;
                }
                else if(extension == "dat")
                {
                    countDat++;
                }
            }
            Assert.AreEqual(8, countHdr, "Expected 8 hdr files");
            Assert.AreEqual(8, countDat, "Expected 8 dat files");
        }
        
        [TestMethod]
        public void TestRemoveBardCodes()
        {
            SnodasUtilities.RemoveBardCodesFromHdr("../../TestFiles/us_ssmv11038wS__A0024TTNATS2017121005DP001.Hdr", "./FixedBardCodes.Hdr");
            GdalConfiguration.ConfigureGdal();
            string datFileName = "us_ssmv11038wS__A0024TTNATS2017121005DP001.dat";
            File.Copy(@"../../TestFiles/" + datFileName, "./" + datFileName, true);
            var dataSet = Gdal.Open("./FixedBardCodes.Hdr", Access.GA_ReadOnly);
            double[] geoTransform = new double[6];
            dataSet.GetGeoTransform(geoTransform);
            Assert.AreEqual(-124.73, Math.Round(geoTransform[0],2), "First value of geoTransform is not as expected");
        }

        [TestMethod]
        public void TestGdalOpen()
        {
            GdalConfiguration.ConfigureGdal();
            var dataSet = Gdal.Open("../../TestFiles/us_ssmv11036tS__T0001TTNATS2017121005HP001.Hdr", Access.GA_ReadOnly);
            double[] geoTransform = new double[6];
            dataSet.GetGeoTransform(geoTransform);
            Assert.AreEqual(-124.73, Math.Round(geoTransform[0],2), "First value of geoTransform is not as expected");
        }

        [TestMethod]
        public void TestSnowdasListForCoordinates()
        {
            GdalConfiguration.ConfigureGdal();
            double Lat = 47.45871;
            double Lon = -121.4170309;
            var coordinateList = new List<(double, double)>
            {
                (Lat, Lon)
            };
            var filePath = "../../TestFiles/us_ssmv11036tS__T0001TTNATS2017121005HP001.Hdr";
            var results = new Dictionary<(double Lat, double Lon), SnodasRow>();
            SnodasUtilities.SnowdasListForCoordinates(coordinateList, results, filePath);
            var result = results.Values.ToList()[0];
            Assert.AreEqual(844, result.SNOWDAS_SnowDepth_mm, "Incorrect snow depth value");
            Assert.AreEqual(new DateTime(2017, 12, 10), result.Date.Date, "Incorrect date value");
        }
        
        [TestMethod]
        public void TestGetValuesForCoordinates()
        {
            GdalConfiguration.ConfigureGdal();
            double Lat = 47.45871;
            double Lon = -121.4170309;
            double Lat1 = 48.45871;
            double Lon1 = -120.4170309;
            var coordinateList = new List<(double, double)>
            {
                (Lat, Lon), (Lat1, Lon1)
            };
            var filePaths = new List<string>(){ "../../TestFiles/us_ssmv11036tS__T0001TTNATS2017121005HP001.Hdr" };
            var results = SnodasUtilities.GetValuesForCoordinates(coordinateList, filePaths);
            Assert.AreEqual(844, results.Where(r => r.Lat == Lat).First().SNOWDAS_SnowDepth_mm, "Incorrect snow depth value");
            Assert.AreEqual(664, results.Where(r => r.Lat == Lat1).First().SNOWDAS_SnowDepth_mm, "Incorrect snow depth value");
        }
    }
}