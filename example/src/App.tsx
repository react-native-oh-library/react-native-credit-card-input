// Copyright (c) 2024 Huawei Device Co., Ltd. All rights reserved
// Use of this source code is governed by a MIT license that can be
// found in the LICENSE file.

import React from "react";
import { StyleSheet, View, Switch, SafeAreaView } from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input';

export default function App() {
  const [useLiteCreditCardInput, setUseLiteCreditCardInput] = React.useState(true);
  const _setUseLiteCreditCardInput = (value) => {
    setUseLiteCreditCardInput(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={style.container}>
        <Switch
          style={style.switch}
          onValueChange={_setUseLiteCreditCardInput}
          value={useLiteCreditCardInput} />

        {useLiteCreditCardInput ? (
          <LiteCreditCardInput
            style={style.style}
            inputStyle={style.input}
            placeholderColor={"pink"}
          />
        ) : (
          <CreditCardInput
            style={style.style}
            labelStyle={style.label}
            inputStyle={style.input}
            placeholderColor={"pink"}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  switch: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#F5F5F5",
    marginTop: 60,
    flex: 1,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  style: {
    backgroundColor: "#f0f0f0",
  },
});
