function showAlert(message, type) {
    let alertMessage = document.getElementById('alert-message')

    //definir a mensagem    
    alertMessage.textContent = message

    //aplicar a classe dde tipo (sucesso ou erro)   
    alertMessage.classList.add('hidden', 'error');
    if (type === 'error') {
        alertMessage.classList.add('error');
    }

    //Exibir o alerta
    alertMessage.style.opacity = 1;
    
    //ocultar o alerta após 3 segundos
    setTimeout(function() {
        alertMessage.style.opacity = 0;
        setTimeout(function() {
            alertMessage.classList.add('hidden');
        }, 500) // tempo para a transião de opacidade
    }, 3000); // tempo de exibição do alerta
}