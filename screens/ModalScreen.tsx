import { View, Text, TouchableOpacity, ViewComponent, FlatList } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import { CompositeNavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Icon } from '@rneui/themed'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { TabStackParamList } from '../navigator/TabNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../navigator/RootNavigator'
import useCustomerOrders from '../hooks/useCustomerOrders'
import DeliveryCard from '../components/DeliveryCard'

type ModalScreenNavigationProp = CompositeNavigationProp<
BottomTabNavigationProp<TabStackParamList>,
NativeStackNavigationProp<RootStackParamList,'MyModal'>
>

type ModalScreenRouteProp = RouteProp<RootStackParamList,'MyModal'>

const ModalScreen = () => {
    const tw = useTailwind()
    const navigation = useNavigation<ModalScreenNavigationProp>()
 const {
    params:{name,userId}
 }=useRoute<ModalScreenRouteProp>()

 const {loading,error,orders}=useCustomerOrders(userId)
    return (
    <View>
        <TouchableOpacity
        onPress={navigation.goBack}
        style={tw('absolute right-5 top-5 z-10')}>
            <Icon name='closecircle' type='antdesign'/>
        </TouchableOpacity>
    <View style={{marginTop: 10}}>
        <View style={[tw('py-5 border-b'), {borderColor: '#591cc'}]}>
            <Text 
            style={[tw('text-cdnter text-xl font-bold'), {Color: '#591cc'}]}
            >{name}</Text>
            <Text style={[tw('text-cdnter italic text-sm')]} >deliveries</Text>
        </View>
    </View>
    <FlatList
    contentContainerStyle={{paddingBottom: 200}}
    data={orders}
    keyExtractor={(Order) => Order.trackingId}
    renderItem={({item:order}) => <DeliveryCard order={order} />}
    />
    </View>
  )
}

export default ModalScreen