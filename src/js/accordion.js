import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const FAQ_LIST = [
    {
        question: "What programming languages are most often used in your project?",
        answer: "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
    },
    {
        question: "How can I contact you?",
        answer: "In the field of web development, there are various technologies and programming languages. Typically, this includes a combination of frontend (client side) and backend (server side) languages."
    },
    {
        question: "What are the deadlines for the project?",
        answer: "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
    },
    {
        question: "Do you provide advice or support?",
        answer: "The terms of project implementation depend to a large extent on a number of factors, such as the scope of the project, its complexity, and the availability of resources. Determining exact deadlines is a difficult task, and it usually occurs during the planning phase of the project."
    },
    {
        question: "What payment methods do you accept?",
        answer: "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
    },
    {
        question: "What does the process of developing a software product look like from idea to implementation?",
        answer: "Payment through credit and debit cards such as Visa, MasterCard, specialized electronic payment systems such as PayPal, as well as payments in cryptocurrencies such as Bitcoin, Ethereum and others."
    }
];


function createFaqElements(faqList, container){
    const box = document.querySelector(container);
    let elementsList = '';

    faqList.forEach(item => {
        const faqItem = `
            <div class="faq-item">
                <h3 class="faq-item__header">
                    <button type="button" class="faq-item__btn">${item.question}</button>
                </h3>
                <div class="faq-item__content">
                    <div class="faq-item__content-inner">
                        <p>${item.answer}</p>
                    </div>
                </div>
            </div>
        `;
        elementsList += faqItem;
    });

    box.innerHTML = elementsList;
}

createFaqElements(FAQ_LIST, '.faq-list');

new Accordion('.faq-list', {
    duration: 300,
    showMultiple: true,
    elementClass: 'faq-item',
    triggerClass: 'faq-item__btn',
    panelClass: 'faq-item__content'
});

