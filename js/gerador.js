$(document).ready(() => {
    const quantidade = 6

    const titulos = [
        'AI Audit',
        'AI Automation Integration',
        'Custom AI Solutions',
        'AI Audit 2',
        'AI Automation Integration 2',
        'Custom AI Solutions 2',
       
    ]
    const sub = [
        'Gain a comprehensive understanding of your business’s potential for AI integration. Our expert team analyzes your operations, identifies opportunities, and provides tailored solutions and recommendations to optimize your AI strategy. Unlock the full power of AI to drive efficiency and growth.',
        'Seamlessly integrate AI automation into your existing systems and workflows. From process automation to data analysis, we empower your business with cutting- edge AI technologies, streamlining operations, improving productivity, and unlocking new levels of scalability and innovation.',
        'Our custom AI solutions harness the latest advancements in machine learning and predictive analytics to drive your business forward. From intelligent chatbots to personalized recommendation engines, we deliver measurable results tailored to your unique needs.',
        '2 Gain a comprehensive understanding of your business’s potential for AI integration. Our expert team analyzes your operations, identifies opportunities, and provides tailored solutions and recommendations to optimize your AI strategy. Unlock the full power of AI to drive efficiency and growth.',
        '2 Seamlessly integrate AI automation into your existing systems and workflows. From process automation to data analysis, we empower your business with cutting- edge AI technologies, streamlining operations, improving productivity, and unlocking new levels of scalability and innovation.',
        '2 Our custom AI solutions harness the latest advancements in machine learning and predictive analytics to drive your business forward. From intelligent chatbots to personalized recommendation engines, we deliver measurable results tailored to your unique needs.'
    ]

    for (let j = 1; j < quantidade + 1; j++) {
        let projeto = `
            <div class="card1">
                <div class="title-cards">
                    <img src="img/Layer_2.png.png" alt="">
                    <h1>${titulos[j - 1]}</h1>
                </div>
                <div class="corpo-cards">
                    <p>${sub[j - 1]}</p>
                    <a href="#">Get In Touch</a>
                </div>
            </div>
        `
        $('.cards').append(projeto);
    }

    const cards = $('.cards');
    const cardWidth = $('.card1').outerWidth(true);
    let currentIndex = 0;
    const numCards = Math.ceil($('.card1').length / 3); 

    function showCards(index) {
        cards.css('transform', 'translateX(' + (-index * cardWidth * 3) + 'px'); // Multiplica por 3 para ajustar o número de cartões por slide
    }
    
    $('#prevButton').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            showCards(currentIndex);
        }
    });

    $('#nextButton').click(function() {
        if (currentIndex < numCards - 1) {
            currentIndex++;
            showCards(currentIndex);
        }
    });
      
      
})
