document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtém os valores dos campos do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const attendance = document.getElementById('attendance').value;
    
    // Atualiza a mensagem de confirmação com base na escolha do convidado
    const messageContent = attendance === 'yes'
        ? `Obrigado, ${name}! Sua presença foi confirmada com sucesso.`
        : `Lamentamos que você não possa comparecer, ${name}. Esperamos vê-lo em uma próxima oportunidade.`;
    
    // Atualiza o recibo com base na escolha do convidado
    document.getElementById('receipt-name').textContent = name;
    document.getElementById('receipt-email').textContent = email;
    document.getElementById('receipt-attendance').textContent = attendance === 'yes' ? 'Sim' : 'Não';
    
    // Exibe a mensagem de confirmação e o recibo
    document.getElementById('message-content').textContent = messageContent;
    document.getElementById('confirmation-message').classList.remove('hidden');
    
    // Opcional: Você pode aqui enviar os dados para um servidor
    // e mostrar uma mensagem de sucesso.
    alert('Sua resposta foi registrada com sucesso!');
    this.reset();
});
