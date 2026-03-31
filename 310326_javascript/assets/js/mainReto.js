for (let i = 1; i<= 10; i++){
    if (i%4 ===0 && i%6===0){
        document.writeln("ALERTA CRÍTICA");
        document.writeln("<br>");
    }else if (i%4 ===0){
        document.writeln("Chequeo de seguridad");
        document.writeln("<br>");
    }else if (i%6===0){
        document.writeln("Alerta del sistema");
        document.writeln("<br>");
    }else if (i%9===0){
        document.writeln("Sistema bloqueado");
        document.writeln("<br>");
        break;
    }else {
        document.writeln("Ciclo "+i," operativo")
        document.writeln("<br>");
    }
}