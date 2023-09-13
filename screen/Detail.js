import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
  Pressable,
  Linking,
  Alert,
} from "react-native";

export default function CVDisplay({
  certifications,
  basicinfo,
  dataskills,
  onEdit,
  careerExperiences,
  projects,
}) {
  const openWebLink = (url) => {
    let newurl = url?.link;
    console.log(newurl);

    if (newurl) {
      Linking.openURL(newurl).catch((err) =>
        console.error("Error opening link: ", err)
      );
    } else {
      console.log("no url");

      Alert.alert(
        "Error", // Title of the alert
        "Error in url input", // Message of the alert
        [
          {
            text: "OK", // Button text
            onPress: () => {
              // Code to execute when the OK button is pressed
              console.log("OK Pressed");
            },
          },
        ],
        { cancelable: false } // Prevent dismissing the alert by tapping outside it
      );
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,

            backgroundColor: "#1C3144",
            borderBottomEndRadius: 15,
            borderBottomStartRadius: 15,
          }}
        >
          <Image
            source={{ uri: basicinfo?.profile }} // Use the image URL as the source
            style={{ width: 100, height: 100, borderRadius: 25 }}
          />

          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
              {basicinfo.fullName}
            </Text>
            <Text style={{ fontSize: 18, color: "white" }}>
              {basicinfo.track}
            </Text>
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingHorizontal: 5 }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "medium",
                textAlign: "justify",
                marginTop: 10,
              }}
            >
              {basicinfo.bio}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={styles.label}>Slack Username:</Text>
            <Text style={{ fontWeight: "bold" }}>
              {basicinfo.slackUsername}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={styles.label}>GitHub Handle:</Text>
            <Text style={{ fontWeight: "bold" }}>{basicinfo.githubHandle}</Text>
          </View>

          <Text style={styles.label}>Skills:</Text>
          {dataskills.map((skill, index) => (
            <View key={index} style={{ flexDirection: "row" }}>
              <Text style={{ marginRight: 5, fontWeight: "800" }}>•</Text>
              <Text style={{ textAlign: "justify", paddingRight: 10 }}>
                {skill}
              </Text>
            </View>
          ))}
          <View style={{ flex: 1, padding: 5 }}>
            <Text> </Text>
            <Text style={styles.label}>Certifications</Text>

            {certifications.map((item, index) => (
              <View key={index}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                    borderRadius: 10,
                  }}
                >
                  <Text>Institution: {item.institution}</Text>
                  <Text>Degree: {item.degree}</Text>
                  <Text>Year: {item.year}</Text>
                  <Text>Field: {item.field}</Text>
                  <Text>Grade: {item.grade}</Text>
                </View>
              </View>
            ))}
          </View>

          <View style={{ flex: 1, padding: 5 }}>
            <Text style={styles.label}>Experiences</Text>

            {careerExperiences.map((experience, index) => (
              <View key={index}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                    borderRadius: 10,
                  }}
                >
                  <View
                    style={{ flexDirection: "row", gap: 10, marginBottom: 3 }}
                  >
                    <Text style={{ fontWeight: "800", width: "20%" }}>
                      Company
                    </Text>

                    <Text> {experience.company}</Text>
                  </View>

                  <View
                    style={{ flexDirection: "row", gap: 10, marginBottom: 3 }}
                  >
                    <Text style={{ fontWeight: "800", width: "20%" }}>
                      Position
                    </Text>

                    <Text> {experience.position}</Text>
                  </View>

                  <View
                    style={{ flexDirection: "row", gap: 10, marginBottom: 3 }}
                  >
                    <Text style={{ fontWeight: "800", width: "20%" }}>
                      Date
                    </Text>

                    <Text> {experience.date}</Text>
                  </View>

                  <View style={{ flexDirection: "row", marginBottom: 3 }}>
                    <Text style={{ fontWeight: "800", width: "30%" }}>
                      Description
                    </Text>

                    <Text style={{ width: "70%", textAlign: "justify" }}>
                      {" "}
                      {experience.description}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>

          <View style={{ flex: 1, padding: 5 }}>
            <Text style={{ fontSize: 20, marginTop: 5 }}>Project Details:</Text>

            {projects.map((item, index) => (
              <View key={index}>
                <View>
                  <Pressable
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                      marginBottom: 5,
                    }}
                    onPress={() => openWebLink(item)}
                  >
                    <Text style={styles.label}>Name:</Text>
                    <Text style={{ fontWeight: "bold" }}>{item.name} </Text>
                    <Text style={{ fontWeight: "200" }}>
                      click to view project{" "}
                    </Text>
                  </Pressable>

                  <Text>Description: {item.description}</Text>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <Pressable
        onPress={onEdit}
        style={{ backgroundColor: "#1C3144", borderRadius: 10, marginTop: 3 }}
      >
        <Text
          style={{ color: "white", textAlign: "center", paddingVertical: 10 }}
        >
          {" "}
          Edit
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: "#A2AEBB",
    paddingHorizontal: 10,
    color: "white",
    // marginTop: 2,
    paddingTop: 40,
  },

  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
  editButton: {
    marginTop: 20,
  },
});
