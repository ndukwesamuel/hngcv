import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from "react-native";

export default function CVDisplay({
  certifications,
  basicinfo,
  dataskills,
  onEdit,
  careerExperiences,
  projects,
}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>My CV</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={{ uri: basicinfo?.profile }} // Use the image URL as the source
            style={{ width: 100, height: 100, borderRadius: 25 }}
          />

          <View>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {basicinfo.fullName}
            </Text>
            <Text style={styles.text}>{basicinfo.track}</Text>
          </View>
        </View>

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

        <Text style={styles.label}>Slack Username:</Text>
        <Text style={styles.text}>{basicinfo.slackUsername}</Text>

        <Text style={styles.label}>GitHub Handle:</Text>
        <Text style={styles.text}>{basicinfo.githubHandle}</Text>
        <Text style={styles.label}>Skills:</Text>
        {dataskills.map((skill, index) => (
          <Text key={index} style={styles.text}>
            {skill}
          </Text>
        ))}
        <View style={{ flex: 1, padding: 16 }}>
          {certifications.map((item, index) => (
            <View key={index}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  marginBottom: 10,
                  padding: 8,
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

        <View style={{ flex: 1, padding: 16 }}>
          {careerExperiences.map((experience, index) => (
            <View key={index}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: "gray",
                  marginBottom: 10,
                  padding: 8,
                }}
              >
                <Text>Company: {experience.company}</Text>
                <Text>Position: {experience.position}</Text>
                <Text>Date: {experience.date}</Text>
                <Text>Description: {experience.description}</Text>
              </View>
            </View>
          ))}
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Project Details:</Text>

          {projects.map((item, index) => (
            <View key={index}>
              <View>
                <Text>Link: {item.link}</Text>
                <Text>Name: {item.name}</Text>
                <Text>Description: {item.description}</Text>
              </View>
            </View>
          ))}
        </View>
        {/* <Text style={styles.label}>Certifications:</Text>
        {cvData.certifications.map((certification, index) => (
          <Text key={index} style={styles.text}>
            {`${certification.institution} - ${certification.year}: ${certification.certification}`}
          </Text>
        ))}
        <Text style={styles.label}>Career Experiences:</Text>
        {cvData.careerExperiences.map((experience, index) => (
          <View key={index}>
            <Text style={styles.text}>
              {`${experience.position} at ${experience.company}`}
            </Text>
            <Text style={styles.text}>{`Date: ${experience.date}`}</Text>
            <Text style={styles.text}>{experience.description}</Text>
          </View>
        ))}
        <Text style={styles.label}>Projects:</Text>
        {cvData.projects.map((project, index) => (
          <View key={index}>
            <Text style={styles.text}>{`Project Name: ${project.name}`}</Text>
            <Text style={styles.text}>{project.description}</Text>
          </View>
        ))}
        <Text style={styles.label}>Bio-Data:</Text>
        <Text style={styles.text}>{`Sex: ${cvData.bioData.sex}`}</Text>
        <Text style={styles.text}>
          {`Health Status: ${cvData.bioData.healthStatus}`}
        </Text>
        <Text
          style={styles.text}
        >{`Nationality: ${cvData.bioData.nationality}`}</Text>
        <Text
          style={styles.text}
        >{`Language Proficiency: ${cvData.bioData.languageProficiency}`}</Text>
        <Text
          style={styles.text}
        >{`Location: ${cvData.bioData.location}`}</Text>
        <Text
          style={styles.text}
        >{`Reference: ${cvData.bioData.reference}`}</Text> */}
      </ScrollView>

      <Button title="Edit" onPress={onEdit} style={styles.editButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F2F2F2",
    color: "white",
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
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    marginTop: 5,
  },
  editButton: {
    marginTop: 20,
  },
});
