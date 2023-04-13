import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get("screen");

const ReelStyle = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    // bottom: 0,
    // right: 0,
    height: height,
    width: width
  },
  safeAreaMargin: {
    margin: 10,
  },
  textView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  reelText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    padding: 15
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 16,
    paddingHorizontal: 16,
    // backgroundColor: 'blue'
  },
  profileImageView: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "pink",
    marginRight: 150,
    marginBottom: -100
  },
  profileImage: {
    height: 20,
    width: 20,
    borderRadius: 10
  },
  profileText: {
    marginHorizontal: 8,
    fontWeight: '500',
    color: 'white',
    fontSize: 15
  },
  followView: {
    borderColor: '#42C2FF',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#42C2FF'
  },
  followingView: {
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5
  },
  followText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },
  followingText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10
  },
  socialIcons: {
    // backgroundColor: 'red',
    alignItems: 'flex-end',
    flexDirection: 'column',
    marginHorizontal: '20%',
    marginRight: '0.3%',
    marginEnd: -10,
    marginLeft: 300,
  },
  socialIconsText: {
    color: 'white'
  },
  shareOptionView: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  shareOptionIcon: {
    borderColor: 'white',
    borderWidth: 1,
    // backgroundColor: 'yellow',
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export { ReelStyle }