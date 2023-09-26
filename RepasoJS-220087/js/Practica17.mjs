function validaUsuario(usr,pass) {
    let estatusLogeo = false;
    if (usr === "Haziel" && pass === "2212") {
        return estatusLogeo = true;
    } else {
        return estatusLogeo = false;
    }
}

export default validaUsuario;