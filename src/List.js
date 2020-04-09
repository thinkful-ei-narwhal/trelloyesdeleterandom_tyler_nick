import React from 'react';
import Card from './Card';
import './listStyles.css'

export default class List extends React.Component {

  //needs state later for add random?

  //props
  // key={list.id}
  // header={list.header}
  // listId={list}
  // cardIds={list.cardIds}
  // allCards={this.state.allCards}
  // deleteCardEvent={this.deleteCardEvent}

  render() {
    const cardComponents = this.props.cardIds.map((cardId,index) => {
      const card = this.props.allCards[cardId];
      return <Card
        key={card.id}
        id={card.id}
        cardIndex={index}
        listId={this.props.listId}
        title={card.title}
        content={card.content}
        deleteCardEvent={this.props.deleteCardEvent}
      />;
    });

    return (
      <div className='List'>
        <header>
          {this.props.header}
        </header>
        <div className='List-cards'>
          {cardComponents}
          <button type="button" onClick={() => {this.props.addRandomCardEvent(this.props.listId)}} id="random">Add Random Card</button>
        </div>
      </div>
    );
  }
}

//When creating a random card you'll need to both add 
//the card to the allCards object as well as 
//insert the card's id into the appropriate 
//list's cardIds.

//create an add random card
