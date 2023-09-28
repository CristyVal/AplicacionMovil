import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from "react-native";

export default function Register(props) {
  const { navigation } = props;


  const goToLogin = () => {
    navigation.navigate("Login");
  }


  return (
    <SafeAreaView style={styles.container}>
       
        <View style={styles.firstSection}>
            <View>
                <View>
                    <Text style={styles.title}>Regístrate para una nueva cuenta</Text>
                </View>
                <View>
                    <Text style={styles.formTitle}>Sólo necesitamos algo más de información</Text>
                </View>
           
                <View style={styles.spacing}>
                    <Text style={styles.label}>Nombre</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="Ingrese su nombre"
                        />
                </View>
                <View style={styles.spacing}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>

                    <View style={styles.spacing}> 
                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.spacing}> 
                        <Text style={styles.label}>Confirmar la contraseña</Text>
                        <TextInput 
                            style={styles.textInput}
                            underlineColorAndroid="pink"                
                            placeholder="********"
                            secureTextEntry={true} 
                        />
                    </View>
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>
                </View> 

                    <View style={[styles.spacing, styles.row]}>
                        <Text style={styles.label}>¿Ya tienes una cuenta?</Text>
                        <TouchableOpacity onPress={goToLogin}>
                            <Text style={styles.signUp}>Inicia sesión</Text>
                        </TouchableOpacity>
                    </View>
             
      </View>
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    Color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  firstSection: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 38,
    color: "black",
    fontWeight: "bold",
    marginTop: 25,
    
    
  },
  formTitle: {
    fontSize: 14,
    color: "#78828c",
    marginBottom: 20,
  },
  label: {
    color: "#78828c",
    
  },
  textInput: {
    color: "#000",
    padding: 8,
  },
  button: {
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  spacing: {
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUp: {
    color: "pink",
    paddingLeft: 5,
  }
})
