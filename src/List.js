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
        </div>
      </div>
    );
  }
}

//create an add random card
// const newRandomCard = () => {
//   const id = Math.random().toString(36).substring(2, 4)
//     + Math.random().toString(36).substring(2, 4);
//   return {
//     id,
//     title: `Random Card ${id}`,
//     content: 'lorem ipsum',
//   }
// }