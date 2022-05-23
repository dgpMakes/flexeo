import {React} from 'react';
import {Card, UserImage, ActionButton,Text,Title} from './Elements';
//import userphoto1 from '../../images/product.jpg';
import { colors } from '../../theme';
import {BsThreeDots} from "react-icons/bs";
import user1 from '../../images/user1.jpg';
import user2 from '../../images/user2.jpg';
import user3 from '../../images/user3.jpg';
import user4 from '../../images/user4.jpg';
import user5 from '../../images/user5.jpg';
import user6 from '../../images/user6.jpg';
import user0 from '../../images/user7.jpg';

const UserCardShort = (props) => {



  function asignPhoto(number){
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
        <UserImage src={asignPhoto(props.num)} alt='user-profile'></UserImage>
        <Text>
            <h5 style={{fontStyle: 'italic', fontSize:"14px"}}>{props.name}{props.surname}</h5>
          <Title style={{fontSize:"16px"}}>{props.username}</Title>
          <div style={{display:"flex", justifyContent:"center"}}>
            <ActionButton>Ver perfil</ActionButton>
            <ActionButton style={{color:colors.like_count_grey, margin:"0px 5px"}}><BsThreeDots size="24" /></ActionButton>
          </div>
        </Text>
      </Card>
      
    </>
  );
};

export default UserCardShort;
