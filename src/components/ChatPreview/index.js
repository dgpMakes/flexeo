import {React} from 'react';
import {Card, UserImage, ActionButton,Text,Title} from './Elements';
import userphoto from '../../images/product.jpg';
import { colors } from '../../theme';
import {BiCheckDouble} from 'react-icons/bi'

const ChatPreview = (props) => {

  return (
    <>
      <Card>
        <UserImage src={userphoto} alt='user-profile'></UserImage>
        <Text>
          <h5 style={{fontSize:"12px",color:colors.i_searchbar}}>12/06/2022</h5>
          <br/>
          <Title style={{fontSize:"14px"}}>@Malta_Alta</Title>
          <div style={{display:"flex"}}><BiCheckDouble style={{color: colors.prim}}/><p style={{fontSize:"14px", color: colors.i_searchbar, fontWeight:"300"}}>Me vale, sí!</p></div>
        </Text>
      </Card>
      
    </>
  );
};

export default ChatPreview;
