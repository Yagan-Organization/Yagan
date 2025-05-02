import { View, Text } from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

interface ButtonAccountScreenProps {
    BtnText: string;
    icon?: React.ReactNode; // Le composant icône devient optionnel
}

export default function ButtonAccountScreen({ BtnText, icon }: ButtonAccountScreenProps) {
    return (
        <View style={{
            width: "auto",
            height: 40,
            borderWidth: 1,
            borderRadius: 50,
            borderColor: colors.SoftAnthracite,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row', // Ajout pour aligner l'icône et le texte
            paddingHorizontal: 10,

        }}>
            {icon && <View style={{ margin: 0,
            width: '10%'
            }}>{icon}</View>}
            <Text style={{
                fontWeight: '300',
                fontSize: 14,
                color: colors.SoftAnthracite,
            }}>
                {BtnText}
            </Text>
        </View>
    );
}
