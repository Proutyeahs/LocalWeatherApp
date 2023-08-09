import {
    View, Text
} from 'react-native';

export default function ForecastDeatils({route}) {

    return (
        <View>
            {/* extra stuff for more deatils */}
            <Text>
                {JSON.stringify(route.params)}
            </Text>
            <Text style={{textAlign: 'center'}}>
                {route.params.number}. {route.params.name} - {route.params.temperature}°
            </Text>
        </View>
    )
}