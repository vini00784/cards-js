"use strict"

const heroes = [
    'IronMan - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]


const createCard = (array) => {
    const ul = document.querySelector('ul')
    const li = document.createElement('li')
    const arraySplit = array.split("-")
    li.classList.add('hero-container')
    li.innerHTML = `
        <span class="cardTitle">${arraySplit[0]}</span>
        <span class="cardText">${arraySplit[1]}</span>
    `
    ul.appendChild(li)
}

heroes.forEach(createCard)