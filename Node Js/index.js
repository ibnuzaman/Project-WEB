const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const os = require('os');
const host = '127.0.0.1'
const port = 3002

// request = data masuk
// response = data keluar dari sistem

const server = http.createServer(function(request, response){  // call back function
    const nama = "Ibnu Zaman";
    let uang = 1000000;
    let jajan = 500000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)

    fs.appendFile('sisauang.txt',sisa,()=>{
        console.log('Berhasil disimpan')
    });
    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();
    function checkCPU(){
        let myCPU = [];
        jumlahCPU.map((cpu, i)=>{
            myCPU.push(cpu.model)
        })
        return myCPU[0]

    }
    console.log(checkCPU())



    const hasil = 
    `<head><tittle>UANG JAJAN NODE JS<tittle>
    </head>
    <body>
    <p> Holaa nama saya ${nama},Saya jajan sebanyak ${jajan}
    <p> uang saya 
    tadinya ${uang} sekarang menjadi sisa ${sisa}
    </p>
    </p>
    <h5>Sisa ram saya pc saya adalah ${sisaRAM}</h5>
    <h5>Merk CPU yang saya pake ${checkCPU()}</h5>
    </body>`

    response.statusCode = 200;
    response.end(hasil)
});

server.listen(port, host,'',function(){
    console.log(`Server nyala di ${host}:${port}`);
});