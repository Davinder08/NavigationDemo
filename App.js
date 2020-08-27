import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <View style={styles.engine}>
        <Animatable.View
          duration={1500}
          animation={'slideInDown'}
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Animatable.Text
            duration={2000}
            onAnimationEnd={() => console.log(true)}
            animation={'bounceIn'}
            style={{color: 'green', fontSize: 20}}
            children={'Engine: Hermes'}
          />
        </Animatable.View>
        <Animatable.View
          animation={'slideInUp'}
          duration={1500}
          style={{
            flex: 2,
            backgroundColor: 'green',
            justifyContent: 'center',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animatable.View
            animation={'slideInUp'}
            duration={1500}
            style={{
              flex: 1,
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}>
            <ScrollView>
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
              <Animatable.Text
                duration={2000}
                animation={'bounceIn'}
                style={styles.text}
                children={'Engine: Hermes'}
              />
            </ScrollView>
          </Animatable.View>
          <Animatable.View
            animation={'slideInUp'}
            duration={1500}
            style={{
              flex: 1,
              backgroundColor: 'blue',
              width: '100%',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Animatable.Text
              duration={2000}
              animation={'bounceIn'}
              style={{color: 'red', fontSize: 40}}
              children={'Engine: Hermes'}
            />
          </Animatable.View>
        </Animatable.View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  engine: {
    flex: 1,
    backgroundColor: 'red',
  },
  body: {
    backgroundColor: 'white',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: 'silver',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'gray',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  text: {
    color: 'red',
    justifyContent: 'center',
    fontSize: 40,
    padding: 10,
  },
});

export default App;
