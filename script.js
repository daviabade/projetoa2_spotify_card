document.addEventListener('DOMContentLoaded', () => {
    
    // SELEÇÃO DE ELEMENTOS DO DOM
    const form = document.getElementById('cardForm');
    const inputMusica = document.getElementById('musica');
    const inputArtista = document.getElementById('artista');
    const selectVibe = document.getElementById('vibe');
    const inputFoto = document.getElementById('foto');

    const cardMusica = document.getElementById('cardMusica');
    const cardArtista = document.getElementById('cardArtista');
    const cardCover = document.getElementById('cardCover');
    const cardPlaceholder = document.getElementById('cardPlaceholder');
    const spotifyCard = document.getElementById('spotifyCard');

    // 1. EVENTO: TEXTO EM TEMPO REAL (Reatividade)
    // FAz a preview
    inputMusica.addEventListener('input', (e) => {
        cardMusica.textContent = e.target.value || 'Nome da Música';
    });

    inputArtista.addEventListener('input', (e) => {
        cardArtista.textContent = e.target.value || 'Artista';
    });

    // 2. EVENTO: PREVIEW DA FOTO DE CAPA
    inputFoto.addEventListener('change', function(event) {
        const file = event.target.files[0];
        
        if (file) {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                cardCover.src = e.target.result;
                cardCover.style.display = 'block';
                cardPlaceholder.style.display = 'none';
            }
            
            reader.readAsDataURL(file);
        }
    });

    // 3. EVENTO: MUDANÇA DE COR DA PÁGINA (Vibe)
    selectVibe.addEventListener('change', (e) => {
        const vibe = e.target.value;
        
        // Adiciona uma transição suave no body via JS
        document.body.style.transition = 'background-color 0.5s ease';

        switch(vibe) {
            case 'alegria':
                document.body.style.backgroundColor = '#E5A913'; // Amarelo
                break;
            case 'romance':
                document.body.style.backgroundColor = '#C11119'; // Vermelho
                break;
            case 'serio':
                document.body.style.backgroundColor = '#404040'; // Cinza elegante
                break;
            default:
                document.body.style.backgroundColor = '#1ED760'; // Verde original
        }
    });

    // 4. EVENTO: SUBMIT DO FORMULÁRIO (Feedback visual)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita recarregar a página
        
        // Efeito de pulso rápido no card para mostrar que a ação foi 'concluída"
        spotifyCard.style.transform = 'scale(1.05)';
        spotifyCard.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            spotifyCard.style.transform = 'scale(1)';
        }, 200);
    });
});