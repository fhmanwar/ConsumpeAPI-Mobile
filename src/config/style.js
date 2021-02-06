import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    titleText: {
        fontSize: 18,
        color: '#333'
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6, 
        textAlign: 'center',
    },

    fabButton: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },

    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }, 
    onCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textOnCard: {
        flexDirection: 'column',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    btnOnCard: {
        flexDirection: 'row',
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
    },
    btnUpdDel: {
        borderRadius: 8,
        borderColor: '#f01d71',
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 5,
        color: '#f01d71'
    }
});