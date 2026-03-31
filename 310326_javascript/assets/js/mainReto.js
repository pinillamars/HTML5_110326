for (let i = 1; i<= 10; i++){
    if (i%4 ===0 && i%6===0){
        document.writeln("ALERTA CRÍTICA");
    }else if (i%4 ===0){
        document.writeln("Chequeo de seguridad");
    }else if (i%6===0){
        document.writeln("Alerta del sistema");
    }else if (i%9===0){
        document.writeln("Sistema bloqueado");
        break;
    }else {
        document.writeln("Ciclo "+i," operativo")
    }
    document.writeln("<br>");
}