//----------------------------------------------------------------------------------------------------;

global.REQUIRES = global.REQUIRES || {};
global.REQUIRES.fs = global.REQUIRES.fs || require( "fs" );

//----------------------------------------------------------------------------------------------------;

var DATE = "20210430 - 전일 목록";

//----------------------------------------------------------------------------------------------------;

//*/
var TARGET_STR = "날짜날짜"
var PATH000 = "E:/GitHub_Ttw--Stock/Ttw-Electron-Stock--AllTimeCharts/data/html/";
var A = SUtilFsReadStream.getList_File_Extension( PATH000, ".csv" );
	A.forEach(function( item ){

		var fByte = SUtilFsReadStream.getFile( PATH000 + item );

		SUtilFsWriteStream.deleteFile( PATH000 + item );

		var nm = item.replace( TARGET_STR, DATE );

		global.REQUIRES.fs.writeFileSync( PATH000 + nm, fByte );
	});
/*/
var TARGET_STR = "20201013";
var PATH000 = "E:/GitHub_Ttw--Stock/Ttw-Electron-Stock--AllTimeCharts/data/Backup_개별/202010/20201014/";
var A = SUtilFsReadStream.getList_File_Extension( PATH000, ".csv" );
	A.forEach(function( item ){

		var fByte = SUtilFsReadStream.getFile( PATH000 + item );

		SUtilFsWriteStream.deleteFile( PATH000 + item );

		var nm = item.replace( TARGET_STR, DATE );

		global.REQUIRES.fs.writeFileSync( PATH000 + nm, fByte );
	});

var PATH000 = "E:/GitHub_Ttw--Stock/Ttw-Electron-Stock--AllTimeCharts/data/html/20201014/";
var A = SUtilFsReadStream.getList_File_Extension( PATH000, ".csv" );
	A.forEach(function( item ){

		var fByte = SUtilFsReadStream.getFile( PATH000 + item );

		SUtilFsWriteStream.deleteFile( PATH000 + item );

		var nm = item.replace( TARGET_STR, DATE );

		global.REQUIRES.fs.writeFileSync( PATH000 + nm, fByte );
	});
//*/
//----------------------------------------------------------------------------------------------------;



//----------------------------------------------------------------------------------------------------;