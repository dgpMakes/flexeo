import {React} from 'react';
import {Card, UserImage, ActionButton,Text,Title} from './Elements';
import userphoto from '../../images/product.jpg';
import { colors } from '../../theme';
import {BsThreeDots} from "react-icons/bs";

const UserCardShort = (props) => {

  return (
    <>
      <Card>
        <UserImage src={userphoto} alt='user-profile'></UserImage>
        <Text>
            <h5 style={{fontStyle: 'italic', fontSize:"14px"}}>{props.name}{props.surname}</h5>
          <Title style={{fontSize:"16px"}}>{props.username}</Title>
          <div style={{display:"flex", justifyContent:"center"}}>
            <ActionButton style={{}}>Ver perfil</ActionButton>
            <ActionButton style={{color:colors.like_count_grey, margin:"0px 5px"}}><BsThreeDots size="24" /></ActionButton>
          </div>
        </Text>
      </Card>
      
    </>
  );
};

export default UserCardShort;
