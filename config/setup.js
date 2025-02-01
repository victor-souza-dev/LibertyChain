import { exec } from 'child_process';
import { platform } from 'os';

const operationSystem = platform();
const action = "Instalando Exiftool no ".concat(operationSystem);
const script = "install-dependencies";

function linux() {
    console.log(action);
    exec(`bash ./config/${operationSystem}/${script}.sh`, function (error, stderr) {
        if (error) {
            console.error("Erro: ".concat(stderr));
            process.exit(1);
        }
        console.log("Operacao bem sucedida!");
    });
}

function windows() {
    console.log(action);
    exec(`cmd /c .\\config\\${operationSystem}\\${script}.bat`, function (error, stderr) {
        if (error) {
            console.error("Erro: ".concat(stderr));
            process.exit(1);
        }
        console.log("Operacao bem sucedida!");
    });
}


if (operationSystem === 'linux') {
    linux();
} else if (operationSystem === 'win32') {
    windows();
} else {
    console.error('Sistema operacional não suportado.');
    process.exit(1);
}