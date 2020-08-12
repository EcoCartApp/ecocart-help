import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import DisplayFAQs from '../Questions/displayFAQs';
import history from './../../history';
import '../../index.css'

class categoryMain extends Component {
  state = { activeItem: `${this.props.match.params.id}` }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
    history.push('/category/'+`${name}`);
    
  }

 /*

  render() {
    function handleItemClick(name) {
      //this.setState({ activeItem: name });
      console.log(`${name}`);
      //active=`${active}`;
      history.push('/category/'+`${name}`);
    
    }
    const { activeItem } = this.state

    return(
      <div>
      <div class="sidenav">
        <a name='gettingStarted'
          active={activeItem === 'gettingStarted'}
          onClick={e =>handleItemClick(e.target.name)}
        >
          gettingStarted
        </a>
        <a name='accountQuestions'
          active={activeItem === 'accountQuestions'}
          onClick={e =>handleItemClick(e.target.name)}
        >
          Services
          </a>
        
      </div>
      <div class="main">
          <h1>{activeItem}</h1>
          <div>
              <DisplayFAQs activeCategory={activeItem} />
          </div>
      </div>
      </div>


    )

*/
render() {
const { activeItem } = this.state
    return (
      <div >
        
        <div className="sidenav" style={{margin:20}}>
        <div >           
            <form>
               
                <input type="text" placeholder="Search.." styles={{margin:30}}/>

            </form>
          
        </div>
        
      <Menu pointing secondary vertical >
        <Menu.Item
          name='gettingStarted'
          active={activeItem === 'gettingStarted'}
          onClick={this.handleItemClick}
          style={{paddingTop:30, paddingBottom:30}}
        />
        <Menu.Item
          name='accountQuestions'
          active={activeItem === 'accountQuestions'}
          onClick={this.handleItemClick}
          style={{paddingTop:30, paddingBottom:30}}
        />
        <Menu.Item
          name='carbonOffsets'
          active={activeItem === 'carbonOffsets'}
          onClick={this.handleItemClick}
          style={{paddingTop:30, paddingBottom:30}}
        />
        <Menu.Item
          name='ecopoints'
          active={activeItem === 'ecopoints'}
          onClick={this.handleItemClick}
          style={{paddingTop:30, paddingBottom:30}}
        />
        <Menu.Item
          name='aboutEcocart'
          active={activeItem === 'aboutEcocart'}
          onClick={this.handleItemClick}
          style={{paddingTop:30, paddingBottom:30}}
        />
        <Menu.Item
          name='privacy'
          active={activeItem === 'privacy'}
          onClick={this.handleItemClick}
          style={{paddingTop:30, paddingBottom:30}}
        />
      </Menu>
      </div>
      <div className="main" >          
          <div style={{paddingTop: 20, paddingRight: 50,paddingLeft: 30}} >   
          <DisplayFAQs activeCategory={activeItem} />
          </div>
      </div>
      </div>
    )
  }
}

export default categoryMain;