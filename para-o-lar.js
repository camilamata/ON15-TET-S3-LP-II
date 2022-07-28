const client = [
    client1 = [ 
        {produto: 'Bolsa pequena', valor: 49.0}, 
        {produto: 'Cinto preto' , valor: 22.0}, 
        {produto: 'Jaqueta Jeans', valor: 300.0}, 
        {produto: 'Calça preta', valor: 100.0}, 
        {produto: 'Blusa simples', valor: 35.0}, 
        {produto: 'Calça jeans clara', valor: 130.0}, 
        {produto: 'Blusa preta gola alta', valor: 60.0}, 
        {produto: 'Short verde canelado', valor: 80.0}, 
        {produto: 'Salto agulha 39', valor: 250.0}, 
        {produto: 'Tênis casual preto', valor: 120.0}, 
        {produto: 'meia calça transparente', valor: 30.0}],
    client2 = [
        {produto: 'Calça plus size', valor: 79.0}, 
        {produto: 'Vestido mid', valor: 97.0}, 
        {produto: 'Bota cano curto', valor: 400.0}, 
        {produto: 'Macacão longo', valor: 127.0}, 
        {produto: 'Pulseira feminista', valor: 10.0}, 
        {produto: 'Camiseta lisa', valor: 39.0},],
    cliente3 = [
        {produto: 'Calça jogger', valor: 69.0}, 
        {produto: 'Tênis skatista', valor: 144.0}, 
        {produto: 'Camisa raglan', valor: 39.0}, 
        {produto: 'Jaqueta de couro', valor: 500.0}, 
        {produto: 'Cadarço simples', valor: 5.0}, 
        {produto: 'Meia cano longo', valor: 25.0}, 
        {produto: 'Relógio de pulso preto', valor: 65.0}, 
        {produto: 'Bermuda longa', valor: 94.0}, ]
    ]

    function shop(clients){
        const itensAmount = clients.length;
        const discount = 0;
        
                    for (const i = 0; i < itensAmount; i++) {       
                     
                        if(clients[i].valor >=50 && clients[i].valor <80){        
                            const discount1 = Number(clients[i].valor *0.05); 
                            discount = discount + discount1;
                            
                        }    
                    
                        else if(clients[i].valor >=80 && clients[i].valor <100){
                            const discount2 = Number(clients[i].valor * 0.1);
                            discount = discount + discount2;
                        }       
                    
                        else if(clients[i].valor >=100 && clients[i].valor <200){
                            const discount3 = Number(clients[i].valor * 0.2);
                            discount = discount + discount3;
                        }        
                    
                        else if(clients[i].valor >=200){
                            const discount4 = Number(clients[i].valor * 0.5);
                            discount = discount + discount4;
                        }
           
                    }              
                const totalDiscount = discount;
               
                const totalPayment = clients.map(item => item.valor).reduce((prev, next) => prev + next);
              
                let totalComDesconto = total - descontoTotal;
                };
fazerCompras(clienteLilit)