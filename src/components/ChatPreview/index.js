import {React} from 'react';
import {Card, UserImage, ActionButton,Text,Title} from './Elements';
import userphoto from '../../images/product.jpg';
import { colors } from '../../theme';
import {BiCheckDouble} from 'react-icons/bi'

import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import user3 from '../../images/user3.jpg';
import user4 from '../../images/user4.jpg';
import user5 from '../../images/user5.jpg';
import user6 from '../../images/user6.jpg';
import user0 from '../../images/user7.jpg';

const ChatPreview = (props) => {

  function assignPhoto(number){
    switch(number){
      
      case 0:
        return user0;
      case 1:
        return user1;
      case 2:
        return user2;
      case 3:
        return user3;
      case 4:
        return user4;
      case 5:
        return user5;
      case 6:
        return user6;
      default:
        return user0;
    }
  }

  return (
    <>
      <Card>
        <UserImage src={assignPhoto(props.num)} alt='user-profile'></UserImage>
        <Text>
          <h5 style={{fontSize:"12px",color:colors.i_searchbar}}>{props.date}</h5>
          <br/>
          <Title style={{fontSize:"14px"}}>@{props.username}</Title>
          <div style={{display:"flex"}}><BiCheckDouble style={{color: colors.prim}}/><p style={{fontSize:"14px", color: colors.i_searchbar, fontWeight:"300"}}>{props.message}</p></div>
        </Text>
      </Card>
      
    </>
  );
};

export default ChatPreview;
