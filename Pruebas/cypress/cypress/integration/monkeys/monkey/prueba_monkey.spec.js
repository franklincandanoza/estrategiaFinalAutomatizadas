 
 describe('Los estudiantes under monkeys with random events', function() {
    it('visits los estudiantes and survives monkeys', function() {
        cy.visit('http://localhost:2368/ghost/#/signin');
        cy.wait(2000);
        cy.get('[id=ember8]').clear();
        cy.get('[id=ember8]').type('c.agudeloh@uniandes.edu.co');
        cy.get('#ember10').clear();
        cy.get('#ember10').type('Ghos2022..');
        cy.get('#ember12').click({force:true});
        cy.wait(2000);
        cy.visit('http://localhost:2368/ghost/#/tags');
        cy.wait(2000);
        cy.get('span:contains("New tag")').click({force:true});
        randomEvent(4);
    })
 })


 //funcion que selecciona eventos al azar y los ejecuta en la app web
 function randomEvent(intentos)
 {

    function getRandomInt(min, max)
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    //funcion que selecciona el elemento al azar
    function getRandomElement()
    {
        //var elements = ['a', 'input', 'select', 'button'];
        var elements = ['button'];
        return elements[Math.floor(Math.random() * elements.length)];
    }
    //da click
    var element='';
        //for (var i=0;i<10;i++)
        //{
    var monkeysLeft = intentos;
    if(monkeysLeft > 0)
    {
            element = getRandomElement();

            const inputs = ['email', 'date', 'tel', 'url', 'number', 'text', 'password'];
            console.log("Elemento " + element);
            /*cy.get(element).then($elements => {
                var randomElement = $elements.get(getRandomInt(0, $elements.length));
                if(!Cypress.dom.isHidden(randomElement))
                {
                    if(element==='a' ||  element==='button')
                    { cy.wrap(randomElement).click({force: true})}
                    if(element==='input')element
                    {cy.wrap(randomElement).type('Campo de texto',{force: true})}
                    if(element==='select')
                    {cy.wrap(randomElement).select(0, {force: true})}
                    monkeysLeft = monkeysLeft - 1;
                }
                cy.wait(1000);
                randomEvent(monkeysLeft);
            });*/
             cy.window().then((win)=>{
                 let $elements = win.document.getElementsByTagName(element);
                 if($elements.length > 0)
                 {
                    var randomElement = $elements.item(getRandomInt(0, $elements.length));
                    if(!Cypress.dom.isHidden(randomElement))
                    {
                        //campo input que treciba texto
                        console.log("EL atributo seleccionado es " +  randomElement.getAttribute("type"));
                        console.log(`SU id es   ${randomElement.id}`);
                        console.log(`SU class es   ${randomElement.class}`);
                        if(element==='input' && inputs.includes(randomElement.getAttribute("type")))
                        {
                            cy.wrap(randomElement).type('2000',{force: true});
                            console.log(`Campo ${randomElement.id} fue llenado con texto` );
                        }
                        else if(element==='button' || element==='a')
                        {cy.wrap(randomElement).click({force: true});
                            console.log(`Boton/Link ${randomElement.name} fue presionado` );
                        }
                        else if(element==='select')
                        {cy.wrap(randomElement).select(0, {force: true})
                           console.log(`Combo ${randomElement.id} fue seleccionado` );
                        }
                        else{
                             console.log("Es otro tipo de elemento");
                        }
                        monkeysLeft = monkeysLeft - 1;

                    }
                    monkeysLeft = monkeysLeft - 1;        
                 }
                 else{
                        console.log("No se encontraron elementos " + element);
                 }
                cy.wait(1000);
                randomEvent(monkeysLeft);
             });

        //}
    }
 }
