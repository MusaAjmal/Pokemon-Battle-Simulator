class Pokemon{
    constructor(name,hitpoints,type1,type2,moves,selectedMove,speedStat,isfainted,image)
    {
        this.name=name
        this.hitpoints=hitpoints
        this.type1=type1
        this.type2=type2
        this.moves=moves.map(move=>new Moves(move.moveName,move.damage,move.elementalType,move.powerPoints,move.priority))
        this.selectedMove=selectedMove
        this.speedStat=speedStat
        this.isfainted=isfainted
        this.image=image
    }
}
class Moves{
    constructor(moveName,damage,ElementalTypes,powerPoints,priority)
    {
        this.moveName=moveName
        this.damage=damage
        this.ElementalTypes=ElementalTypes
        
        this.powerPoints=powerPoints
        this.priority=priority
    }
}
 class Player{
    constructor(name,pokemons,selectedPokemon,turn,won){
        this.name=name
       this.pokemons=pokemons
       this.selectedPokemon=selectedPokemon
      
       this.turn=turn
       this.won=won
       
    }
   
 }
 
 
 


  let Tm13=new Moves("Ice Beam",90,"Ice",10,0)
  let Hm03=new Moves("Surf",95,"Water",15,0)
  let Tm25=new Moves("Earthquake",100,"Ground",10,0)
  let Tm34=new Moves("FlameThrower",90,"Fire",15,0)
  let Tm30=new Moves("Shadow Ball",90,"Ghost",10,0)
  let Tm29=new Moves("Psychic",90,"Psychic",10,0)
  let Tm40=new Moves("Aerial Ace",60,"Flying",20,0)
  let Tm24=new Moves("Thunderbolt",90,"Electric",15,0)
  let Tm90=new Moves("Dark Pulse",80,"Dark",20,0)
  let Tm56=new Moves("Energy Ball",90,"Grass",20,0)
  let Tm66=new Moves("Bug Buzz",90,"Bug",10,0)
  let Tm36=new Moves("Sludge Bomb",90,"Poison",10,0)
  let Tm31=new Moves("Brick Break",80,"Fighting",20,0)
  let Tm98=new Moves("Flash Canon",90,"Steel",20,0)
  let Tm100=new Moves("Stone-Edge",100,"Rock",5,0)
  let Tm50=new Moves("Dragon Claw",90,"Dragon",20,0)
  let fairyMove=new Moves("Spirit Break",80,"Fairy",15,0)
  let normalMove=new Moves("Quick Attack",40,"Normal",40,1)
  let charimage=new Image()
  charimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/charizard.png"
  let galladeimage=new Image()
  galladeimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/gallade.png"
  let pikachuimage=new Image()
  pikachuimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/pikachu.png"
  let articunoimage=new Image()
  articunoimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/articuno.png"
  let nidokingimage=new Image()
  nidokingimage.src="https://marriland.com/wp-content/plugins/marriland-core/images/pokemon/sprites/home/full/nidoking.png"
  let Barraskewdaimage=new Image()
  Barraskewdaimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/barraskewda.png"
  let clefableimage=new Image()
    clefableimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/clefable.png"
    let zygardeimage=new Image()
    zygardeimage.src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/detail/718.png"
    let gengarimage=new Image()
    gengarimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/gengar.png"
    let lucarioimage=new Image()
    lucarioimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/lucario.png"
    let moltresimage=new Image()
    moltresimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/moltres.png"
    let miraidonimage=new Image()
    miraidonimage.src="https://img.pokemondb.net/sprites/scarlet-violet/normal/miraidon.png"

  let pokemon1=new Pokemon("Charizard",400,"Fire","Flying",[Tm34,Tm40,Tm31,Tm50],"",85,false,charimage)
  let pokemon2=new Pokemon("Pikachu",350,"Electric",null,[Tm24,Tm98,normalMove,Tm40],"",70,false,pikachuimage)
  let pokemon3=new Pokemon("Gallade",400,"Psychic","Fighting",[Tm29,Tm31,Tm90,Tm100],"",75,false,galladeimage)
  let pokemon4=new Pokemon("Articuno",400,"Ice","Flying",[Tm13,Tm90,Tm30,Tm40],"",80,false,articunoimage)
  let pokemon5=new Pokemon("Nidoking",400,"Poison","Ground",[Tm25,Tm36,Tm100,Hm03],"",80,false,nidokingimage)
  let pokemon6=new Pokemon("Barraskewda",400,"Water","Water",[Hm03,Tm13,normalMove,Tm31],"",130,false,Barraskewdaimage)
  let pokemon7=new Pokemon("Clefable",400,"Fairy","Fairy",[fairyMove,Tm24,Hm03,Tm98],"",65,false,clefableimage)
  let pokemon8=new Pokemon("Zygarde",400,"Dragon","Ground",[Tm50,Tm25,Tm56,Tm100],"",85,false,zygardeimage)
  let pokemon9=new Pokemon("Gengar",400,"Ghost","Poison",[Tm30,Tm36,Tm13,Tm29],"",100,false,gengarimage)
  let pokemon10=new Pokemon("Lucario",400,"Fighting","Steel",[Tm31,Tm100,Tm25,normalMove],"",90,false,lucarioimage)
  let pokemon11=new Pokemon("Moltres",400,"Dark","Flying",[Tm90,Tm40,Tm30,Tm34],"",80,false,moltresimage)
  let pokemon12=new Pokemon("Miraidon",400,"Electric","Dragon",[Tm24,Tm25,Tm50,Tm30],"",125,false,miraidonimage)
  let player1=new Player("player1",pokemon1,null,0,false)
  let player2=new Player("player2",pokemon3,null,0,false)
let p2n=document.getElementById("p2-pokname")
let p2h=document.getElementById("p2-health")
let p2hbar=document.getElementById("p2-healthbar")
let p2e=document.getElementById("p2-entity")
let p2image=document.getElementById("p2-pokemon")
let p2t=document.getElementById("p2-textcontainer")
let p1n=document.getElementById("p1-pokname")
let p1h=document.getElementById("p1-health")
let p1hbar=document.getElementById("p1-healthbar")
let p1e=document.getElementById("p1-entity")
let p1image=document.getElementById("p1-pokemon")
let p1t=document.getElementById("p1-text")
console.log(document.getElementById("p1-text"))
let player1Move1=document.getElementById("player1-move1")
let player1Move2=document.getElementById("player1-move2")
let player1Move3=document.getElementById("player1-move3")
let player1Move4=document.getElementById("player1-move4")
let player1moves=[player1Move1,player1Move2,player1Move3,player1Move4]
let player2Move1=document.getElementById("player2-move1")
let player2Move2=document.getElementById("player2-move2")
let player2Move3=document.getElementById("player2-move3")
let player2Move4=document.getElementById("player2-move4")
let player2moves=[player2Move1,player2Move2,player2Move3,player2Move4]
let MOVES=[player1moves,player2moves]
let button=document.getElementById("start")
let para=document.createElement("p")
let som=document.querySelectorAll(".para")
let midline=document.getElementById("mid-line")
let turnCounter=1

let elements=[p2n,p2h,p2e,p2t,p1n,p1h,p1e,p1t]
for(let element of elements)
{
    element.style.visibility="hidden"
}
for(let move of player1moves)
{
    move.style.visibility="hidden"
}
for (let move of player2moves)
{
    move.style.visibility="hidden"
}
som.forEach(element=>{
    element.style.visibility="hidden"
})

function startGame()
{ 
    button.style.visibility="hidden"
    player1.selectedPokemon=pokemon10
    p1n.textContent=player1.selectedPokemon.name
    p1hbar.textContent=player1.selectedPokemon.hitpoints
    p1image.src=player1.selectedPokemon.image.src
    
    player2.selectedPokemon=pokemon3
    p2n.textContent=player2.selectedPokemon.name
    p2hbar.textContent=player2.selectedPokemon.hitpoints
    p2image.src=player2.selectedPokemon.image.src
    for(let element of elements)
        {
            element.style.visibility="visible"
        }
        for(let move of player1moves)
        {
            move.style.visibility="visible"
        }
        for(let move of player2moves)
        {
            move.style.visibility="visible"
        }
        som.forEach(element=>{
            element.style.visibility="visible"
        })

    checkwhosturnisit(player1,player2)
    
}
function player1dealdamage(butt)
 {
    if(butt.id==="player1-move1")
    {
        player1Move2.disabled=true
        player1Move3.disabled=true
        player1Move4.disabled=true
        player1.selectedPokemon.choosenMove=player1.selectedPokemon.moves[0]
        console.log(Math.floor(player1.selectedPokemon.choosenMove.damage))
        p1t.textContent=player1.selectedPokemon.name+" "+"used"+" "+player1.selectedPokemon.choosenMove.moveName
        p2hbar.style.width=p2hbar.getBoundingClientRect().width-(player1.selectedPokemon.choosenMove.damage/2)+"px"
        console.log(p2hbar.getBoundingClientRect().width-(player1.selectedPokemon.choosenMove.damage))
        player2.selectedPokemon.hitpoints=player2.selectedPokemon.hitpoints-player1.selectedPokemon.choosenMove.damage
        p2hbar.textContent=player2.selectedPokemon.hitpoints
       if(parseInt(p2hbar.textContent)<=0)
       {
        player2.selectedPokemon.isfainted=true
        p2hbar.textContent="0"
        player1.won=true
        won(player1,player2)
       }

    }
    else if(butt.id==="player1-move2")
    {
        player1Move1.disabled=true
        player1Move3.disabled=true
        player1Move4.disabled=true
        player1.selectedPokemon.choosenMove=player1.selectedPokemon.moves[1]
        p1t.textContent=player1.selectedPokemon.name+" "+"used"+" "+player1.selectedPokemon.choosenMove.moveName
       
        p2hbar.style.width=p2hbar.getBoundingClientRect().width-(player1.selectedPokemon.choosenMove.damage/2)+"px"
        player2.selectedPokemon.hitpoints=player2.selectedPokemon.hitpoints-player1.selectedPokemon.choosenMove.damage
        p2hbar.textContent=player2.selectedPokemon.hitpoints
       if(parseInt(p2hbar.textContent)<=0)
       {
        player2.isfainted=true
        p2hbar.textContent="0"
        player1.won=true
        won(player1,player2)
       }
   
    }
    else if(butt.id==="player1-move3")
    {
        player1Move1.disabled=true
        player1Move2.disabled=true
        player1Move4.disabled=true
        player1.selectedPokemon.choosenMove=player1.selectedPokemon.moves[2]
        p1t.textContent=player1.selectedPokemon.name+" "+"used"+" "+player1.selectedPokemon.choosenMove.moveName
        
        p2hbar.style.width=p2hbar.getBoundingClientRect().width-(player1.selectedPokemon.choosenMove.damage/2)+"px"
        player2.selectedPokemon.hitpoints=player2.selectedPokemon.hitpoints-player1.selectedPokemon.choosenMove.damage
        p2hbar.textContent=player2.selectedPokemon.hitpoints
       if(parseInt(p2hbar.textContent)<=0)
       {
        player2.isfainted=true
        p2hbar.textContent="0"
        player1.won=true
        won(player1,player2)
       }

    }
    else if(butt.id==="player1-move4")
    {
        player1Move1.disabled=true
        player1Move2.disabled=true
        player1Move3.disabled=true
        player1.selectedPokemon.choosenMove=player1.selectedPokemon.moves[3]
        p1t.textContent=player1.selectedPokemon.name+" "+"used"+" "+player1.selectedPokemon.choosenMove.moveName
   
        p2hbar.style.width=p2hbar.getBoundingClientRect().width-(player1.selectedPokemon.choosenMove.damage/2)+"px"
        player2.selectedPokemon.hitpoints=player2.selectedPokemon.hitpoints-player1.selectedPokemon.choosenMove.damage
        p2hbar.textContent=player2.selectedPokemon.hitpoints
       if(parseInt(p2hbar.textContent)<=0)
       {
        player2.isfainted=true
        p2hbar.textContent="0"
        player1.won=true
        won(player1,player2)
       }

    }
    player1.turn=0
    player2.turn=1
    turnCounter++
    checkwhosturnisit(player1,player2)
 }
 function player2dealdamage(butt)
 {
    if(butt.id==="player2-move1")
    {
        player2Move2.disabled=true
        player2Move3.disabled=true
        player2Move4.disabled=true
        player2.selectedPokemon.choosenMove=player2.selectedPokemon.moves[0]
        p2t.textContent=player2.selectedPokemon.name+" "+"used"+" "+player2.selectedPokemon.choosenMove.moveName
       
        p1hbar.style.width=p1hbar.getBoundingClientRect().width-(player2.selectedPokemon.choosenMove.damage/2)+"px"
        player1.selectedPokemon.hitpoints=player1.selectedPokemon.hitpoints-player2.selectedPokemon.choosenMove.damage
        p1hbar.textContent=player1.selectedPokemon.hitpoints
       if(parseInt(p1hbar.textContent)<=0)
       {
        player2.isfainted=true
        p1hbar.textContent="0"
        player2.won=true
        won(player1,player2)
       }

    }
    else if(butt.id==="player2-move2")
    {
        player2Move1.disabled=true
        player2Move3.disabled=true
        player2Move4.disabled=true
        player2.selectedPokemon.choosenMove=player2.selectedPokemon.moves[1]
        p2t.textContent=player2.selectedPokemon.name+" "+"used"+" "+player2.selectedPokemon.choosenMove.moveName
       
        p1hbar.style.width=p1hbar.getBoundingClientRect().width-(player2.selectedPokemon.choosenMove.damage/2)+"px"
        player1.selectedPokemon.hitpoints=player1.selectedPokemon.hitpoints-player2.selectedPokemon.choosenMove.damage
        p1hbar.textContent=player1.selectedPokemon.hitpoints
       if(parseInt(p1hbar.textContent)<=0)
       {
        player2.isfainted=true
        p1hbar.textContent="0"
        player2.won=true
        won(player1,player2)
       }
    }
    else if(butt.id==="player2-move3")
    {
        
        player2Move1.disabled=true
        player2Move2.disabled=true
        player2Move4.disabled=true
        player2.selectedPokemon.choosenMove=player2.selectedPokemon.moves[2]
        p2t.textContent=player2.selectedPokemon.name+" "+"used"+" "+player2.selectedPokemon.choosenMove.moveName
        
        p1hbar.style.width=p1hbar.getBoundingClientRect().width-(player2.selectedPokemon.choosenMove.damage/2)+"px"
        player1.selectedPokemon.hitpoints=player1.selectedPokemon.hitpoints-player2.selectedPokemon.choosenMove.damage
        p1hbar.textContent=player1.selectedPokemon.hitpoints
       if(parseInt(p1hbar.textContent)<=0)
       {
        player2.isfainted=true
        p1hbar.textContent="0"
        player2.won=true
        won(player1,player2)
       }
    }
    else if(butt.id==="player2-move4")
    {
        
        player2Move1.disabled=true
        player2Move2.disabled=true
        player2Move3.disabled=true
        player2.selectedPokemon.choosenMove=player2.selectedPokemon.moves[3]
        p2t.textContent=player2.selectedPokemon.name+" "+"used"+" "+player2.selectedPokemon.choosenMove.moveName
         
       
        p1hbar.style.width=p1hbar.getBoundingClientRect().width-(player2.selectedPokemon.choosenMove.damage/2)+"px"
        player1.selectedPokemon.hitpoints=player1.selectedPokemon.hitpoints-player2.selectedPokemon.choosenMove.damage
        p1hbar.textContent=player1.selectedPokemon.hitpoints
       if(parseInt(p1hbar.textContent)<=0)
       {
        player2.isfainted=true
        p1hbar.textContent="0"
        player2.won=true
        won(player1,player2)
       }
    }
    player2.turn=0
    player1.turn=1
    turnCounter++
  checkwhosturnisit(player1,player2)
 }
function checkwhosturnisit(player1,player2)
{
    if((turnCounter===1&&player1.selectedPokemon.speedStat>player2.selectedPokemon.speedStat))
    {
      
   player1.turn=1
    setTimeout(()=>{
        p1t.textContent="Player 1s turn due to speed advantage"
    },2000)
    setTimeout(()=>{
        p2t.textContent="Waiting for turn..."
    },2000)
    
   
    player1Move1.innerText=player1.selectedPokemon.moves[0].moveName
    player1Move2.innerText=player1.selectedPokemon.moves[1].moveName
    player1Move3.innerText=player1.selectedPokemon.moves[2].moveName
    player1Move4.innerText=player1.selectedPokemon.moves[3].moveName
    
    for(let move1 of player1moves)
    {
        move1.disabled=false
    }
    for(let move1 of player2moves)
    {
        move1.disabled=true
    }
}
  else if(player1.turn===1)
   {
    player1.turn=1
    setTimeout(()=>{
        p1t.textContent="Player 1s turn"
    },2000)
    setTimeout(()=>{
        p2t.textContent="Waiting for turn..."
    },2000)
    
   
    player1Move1.innerText=player1.selectedPokemon.moves[0].moveName
    player1Move2.innerText=player1.selectedPokemon.moves[1].moveName
    player1Move3.innerText=player1.selectedPokemon.moves[2].moveName
    player1Move4.innerText=player1.selectedPokemon.moves[3].moveName
    
    for(let move1 of player1moves)
    {
        move1.disabled=false
    }
    for(let move1 of player2moves)
    {
        move1.disabled=true
    }
   }

     
    
else if(turnCounter===1 && player2.selectedPokemon.speedStat>player1.selectedPokemon.speedStat){
    player2.turn=1

    setTimeout(()=>{
        p2t.textContent="Player 2s turn due to speed advantage"
    },2000)
    setTimeout(()=>{
        p1t.textContent="Waiting for turn...."
    },2000)
    
    player2Move1.innerText=player2.selectedPokemon.moves[0].moveName
    player2Move2.innerText=player2.selectedPokemon.moves[1].moveName
    player2Move3.innerText=player2.selectedPokemon.moves[2].moveName
    player2Move4.innerText=player2.selectedPokemon.moves[3].moveName
    
    for(let move2 of player2moves)
    {
        move2.disabled=false
    }
    for(let move2 of player1moves)
    {
        move2.disabled=true
    }

}
else{
    player2.turn=1

    setTimeout(()=>{
        p2t.textContent="Player 2s turn"
    },2000)
    setTimeout(()=>{
        p1t.textContent="Waiting for turn...."
    },2000)
    
    player2Move1.innerText=player2.selectedPokemon.moves[0].moveName
    player2Move2.innerText=player2.selectedPokemon.moves[1].moveName
    player2Move3.innerText=player2.selectedPokemon.moves[2].moveName
    player2Move4.innerText=player2.selectedPokemon.moves[3].moveName
    
    for(let move2 of player2moves)
    {
        move2.disabled=false
    }
    for(let move2 of player1moves)
    {
        move2.disabled=true
    }

}
}
function won(player1,player2)
{
    if(player2.won)
    {
        button.style.visibility="hidden"
        for(element of elements)
        {
            element.style.visibility="hidden"
        }
       for( let move of player1moves)
       {
        move.style.visibility="hidden"
       }
       for(let move of player2moves)
       {
        move.style.visibility="hidden"
       }
       som.forEach(element=>{
        element.style.visibility="hidden"
       })
        midline.style.visibility="hidden"
        let all=document.querySelectorAll("*")
        all.forEach(element=>{
            element.style.border="none"
        })
        
     
        para.setAttribute("id","winning-text")
        para.innerText="PLAYER 2 IS THE WINNER !!!!"
        document.body.appendChild(para)
    }
    else{
        button.style.visibility="hidden"
        for(element of elements)
        {
            element.style.visibility="hidden"
        }
        for( let move of player1moves)
        {
         move.style.visibility="hidden"
        }
        for(let move of player2moves)
        {
         move.style.visibility="hidden"
        }
        midline.style.visibility="hidden"
        let all=document.querySelectorAll("*")
        all.forEach(element=>{
            element.style.border="none"
        })
         som.forEach(element=>{
            element.style.visibility="hidden"
         })
      
        para.setAttribute("id","winning-text")
        para.innerText="PLAYER 1 IS THE WINNER !!!!"
        document.body.appendChild(para)
    }
}
