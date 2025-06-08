let tanggal = 12; // Variabel Tanggal
let bulan = "februari"; // Variabel Bulan
let tahun = 2001; // Variabel Tahun

let Bulan;

// code switch case dibawah
switch (bulan) { 
    case "Januari":
        bulan = "Januari";
        break;
    case "Februari":
        bulan = "Februari";
        break;    
    case "Maret":
        Bulan = "Maret";
        break;
    case "April":
        bulan = "April";
        break;
    case "Mei":
        bulan = "Mei";
        break;
    case "Juni":
        bulan = "Juni";
        break;
    case "Juli":
        bulan = "Juli";
        break;
    case "Agustus":
        bulan = "Agustus";
        break;
    case "September":
        bulan = "September";
        break;    
    case "Oktober":
        bulan = "Oktober";
        break;
    case "November":
        bulan = "November";
        break;
    case "Desember":
        bulan = "Desember";
        break;
        default:
            Bulan = "Bulan tidak ada"; 
            //jika variabel tersebut tidak sama like februari2025
    }
    
    console.log(`${tanggal} ${bulan} ${tahun}`);
    //buat outputnya ntar 
   //node tugas2.js