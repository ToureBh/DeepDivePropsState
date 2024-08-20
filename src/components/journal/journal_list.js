import React, { Component } from 'react';
import { JournalEntry } from './journal_entry'

const rawJournalData = [
    { title: "post One", content: "Post Content", status: "draft" },
    { title: "post Two", content: "Post Content", status: "published" },
    { title: "post Three", content: "Post Content", status: "published" },
    { title: "post Four", content: "Post Content", status: "published" },
];
     
//componente funcional. estático. que llamamos dentro de nuestro componente class. esto podría estar en su propio documento. de hecho lo llevamos a journal-entry.js
/* const JournalEntry = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

*/

//class component. vamos a trabajar con state    
export default class JournalList extends Component {
    constructor(props) {
      super();
  
      this.state = {
        journalData: rawJournalData,
        isOpen: true
      };
    }
  
    clearEntries = () => {
      this.setState({ journalData: [], isOpen: false });
    };
  
    showAllEntries = () => {
      this.setState({ journalData: rawJournalData, isOpen: true });
    };

    render() {
        const journalEntries = this.state.journalData.map(journalEntry => {
            return(
                <div key={journalEntry.title}>
                    <JournalEntry 
                        title={journalEntry.title}
                        content={journalEntry.content}
                    />
                </div>
            );
        });

        return (
            <div>
                <h2>{this.props.heading}</h2>

                {journalEntries}

                <button onClick={this.clearEntries}>Clear all entries</button>
                <button onClick={this.showAllEntries}>Show all entries</button>

            </div>
        );

    }
}


