let tanggal = 12; // Variabel Tanggal
let bulan = "februari"; // Variabel Bulan
let tahun = 2001; // Variabel Tahun

let namaBulan;

// code switch case dibawah
switch (bulan) { 
    case "Januari":
        namaBulan = "Januari";
        break;
    case "Februari":
        namaBulan = "Februari";
        break;    
    case "Maret":
        namaBulan = "Maret";
        break;
    case "April":
        namaBulan = "April";
        break;
    case "Mei":
        namaBulan = "Mei";
        break;
    case "Juni":
        namaBulan = "Juni";
        break;
    case "Juli":
        namaBulan = "Juli";
        break;
    case "Agustus":
        namaBulan = "Agustus";
        break;
    case "September":
        namaBulan = "September";
        break;    
    case "Oktober":
        namaBulan = "Oktober";
        break;
    case "November":
        namaBulan = "November";
        break;
    case "Desember":
        namaBulan = "Desember";
        break;
        default:
            namaBulan = "Bulan tidak ada"; 
            //jika variabel tersebut tidak sama like februari2025
    }
    
    console.log(`${tanggal} ${namaBulan} ${tahun}`);
    //buat outputnya ntar 
   //node tugas2.js