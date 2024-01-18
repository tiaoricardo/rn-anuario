import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Platform, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { useMemo } from 'react';

export default function Home() {

    //const params = useLocalSearchParams();
    const params = {uri: 'https://app.anuariodopiaui.com.br'}

    return (
        <View className='flex flex-1 bg-white'>
            {/*{Platform.OS !== "ios" && <Header />}*/}
            <WebView
                className="flex flex-1"
                originWhitelist={['*']}
                source={{ uri: params.uri }}
                renderLoading={() =>
                    <View className='flex flex-col flex-1 space-y-4 justify-start items-center'>
                        <ActivityIndicator color={'#1a1a1a'} size={'small'} />
                        <View className='flex justify-center items-center'>
                            <Text className="text-center font-body text-sm font-semibold text-neutral-500">Aguarde enquanto buscamos suas informações</Text>
                            <Text className="text-center font-body text-sm font-semibold text-neutral-500">isso pode demorar alguns instantes</Text>
                        </View>
                    </View>
                }
                startInLoadingState={true}
            />
        </View>
    );
}
