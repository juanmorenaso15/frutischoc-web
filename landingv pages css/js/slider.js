(function(){

    const sliders = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    buttonNext.addEventListener('click', ()=>{
        chagePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        chagePosition(-1);
    });
    const chagePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        
    }

})();