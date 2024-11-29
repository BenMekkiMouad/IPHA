import { Image, TouchableOpacity } from "react-native";

function Avatar({navigation}: any): React.JSX.Element {
    return (
      <TouchableOpacity  onPress={() => navigation.navigate('Login')}>
        <Image
          source={require('@asset/user.png')} 
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </TouchableOpacity>
    );
  }
  
export default Avatar;  