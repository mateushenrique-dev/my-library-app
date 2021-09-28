import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Library from "./src/pages/Library";
import NewBook from "./src/pages/NewBook";
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_500Medium } from "@expo-google-fonts/poppins";
import BookContextWrapper from "./src/context/book";
import Book from "./src/pages/Book";
import AppLoading from "expo-app-loading";

export default function App() {
  const Stack = createNativeStackNavigator();

  let [fontLoaded] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsBold: Poppins_600SemiBold,
    poppinsMedium: Poppins_500Medium,
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

    return (
      <BookContextWrapper>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="library"
              options={{ title: "Minha biblioteca" }}
              component={Library}
            />
            <Stack.Screen
              name="newBook"
              options={{ title: "Adicionar livro" }}
              component={NewBook}
            />
            <Stack.Screen
              name="book"
              options={{ title: "Meu livro" }}
              component={Book}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </BookContextWrapper>
    );
  }

