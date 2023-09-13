// CVEditForm.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  Pressable,
} from "react-native";

export default function Create({
  cvData,
  onUpdate,
  onCancel,
  dataskills,
  setDataskills,
  basicinfo,
  setBasicinfo,
  certifications,
  setCertifications,
  setCareerExperiences,

  careerExperiences,
  projects,
  setProjects,
  bioData,
  setBioData,
}) {
  const [newSkill, setNewSkill] = useState("");
  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setDataskills([...dataskills, newSkill]);
      setNewSkill("");
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = [...dataskills];
    updatedSkills.splice(index, 1);
    setDataskills(updatedSkills);
  };

  const handleChange = (key, value) => {
    setBasicinfo({
      ...basicinfo,
      [key]: value,
    });
  };

  const addCertification = () => {
    const newCertification = {
      institution: "",
      degree: "",
      year: "",
      field: "",
      grade: "",
    };
    setCertifications([...certifications, newCertification]);
  };

  const removeCertification = (index) => {
    const updatedCertifications = [...certifications];
    updatedCertifications.splice(index, 1);
    setCertifications(updatedCertifications);
  };

  const Certification_handleChange = (index, key, value) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index][key] = value;
    setCertifications(updatedCertifications);
  };

  const addExperience = () => {
    const newExperience = {
      company: "",
      position: "",
      date: "",
      description: "",
    };
    setCareerExperiences([...careerExperiences, newExperience]);
  };

  const removeExperience = (index) => {
    const updatedExperiences = [...careerExperiences];
    updatedExperiences.splice(index, 1);
    setCareerExperiences(updatedExperiences);
  };

  const CareerExperience_handleChange = (index, key, value) => {
    const updatedExperiences = [...careerExperiences];
    updatedExperiences[index][key] = value;
    setCareerExperiences(updatedExperiences);
  };

  const addProject = () => {
    const newProject = {
      link: "",
      name: "",
      description: "",
    };
    setProjects([...projects, newProject]);
  };

  const removeProject = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  const Project_handleChange = (index, key, value) => {
    const updatedProjects = [...projects];
    updatedProjects[index][key] = value;
    setProjects(updatedProjects);
  };

  const BioData_handleChange = (key, value) => {
    const updatedBioData = { ...bioData, [key]: value };
    setBioData(updatedBioData);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 20, marginBottom: 10, textAlign: "center" }}>
            Update your CV
          </Text>
          <View
            style={{
              margin: "auto",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: basicinfo.profile }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginBottom: 10,
                display: "flex",
                justifyContent: "center",
                borderWidth: 1,
                borderColor: "gray",
              }}
            />
          </View>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Full Name"
            value={basicinfo.fullName}
            onChangeText={(text) => handleChange("fullName", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Slack Username"
            value={basicinfo.slackUsername}
            onChangeText={(text) => handleChange("slackUsername", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="GitHub Handle"
            value={basicinfo.githubHandle}
            onChangeText={(text) => handleChange("githubHandle", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Bio"
            multiline
            numberOfLines={4}
            value={basicinfo.bio}
            onChangeText={(text) => handleChange("bio", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Profile URL"
            value={basicinfo.profile}
            onChangeText={(text) => handleChange("profile", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Track"
            value={basicinfo.track}
            onChangeText={(text) => handleChange("track", text)}
          />
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Skills:</Text>
          <ScrollView>
            {dataskills.map((skill, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginBottom: 10,
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                    borderWidth: 1,
                    borderColor: "gray",
                    padding: 8,
                    borderRadius: 10,
                  }}
                  placeholder={`Skill ${index + 1}`}
                  value={skill}
                  onChangeText={(text) => {
                    const updatedSkills = [...dataskills];
                    updatedSkills[index] = text;
                    setDataskills(updatedSkills);
                  }}
                />
                {/* <Button title="Remove" onPress={() => removeSkill(index)} /> */}
                <Pressable
                  onPress={() => removeSkill(index)}
                  style={{
                    backgroundColor: "red",
                    borderRadius: 50, // Use a numeric value for borderRadius
                    width: 30,
                    height: 30,
                    marginTop: 10,
                    alignItems: "center",
                    justifyContent: "center", // Center the text vertically and horizontally
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    x
                  </Text>
                </Pressable>
              </View>
            ))}
          </ScrollView>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Add a new skill"
            value={newSkill}
            onChangeText={(text) => setNewSkill(text)}
          />
          <Button title="Add Skill" onPress={addSkill} />
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Certifications:
          </Text>
          <ScrollView>
            {certifications.map((certification, index) => (
              <View key={index}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Institution"
                  value={certification.institution}
                  onChangeText={(text) =>
                    Certification_handleChange(index, "institution", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Degree"
                  value={certification.degree}
                  onChangeText={(text) =>
                    Certification_handleChange(index, "degree", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Year"
                  value={certification.year}
                  onChangeText={(text) =>
                    Certification_handleChange(index, "year", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Field"
                  value={certification.field}
                  onChangeText={(text) =>
                    Certification_handleChange(index, "field", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Grade"
                  value={certification.grade}
                  onChangeText={(text) =>
                    Certification_handleChange(index, "grade", text)
                  }
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => removeCertification(index)}
                    style={{
                      backgroundColor: "red",
                      borderRadius: 10,
                      marginVertical: 10,
                      width: "50%",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        paddingVertical: 10,
                      }}
                    >
                      {" "}
                      Remove
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
          <Button title="Add Certification" onPress={addCertification} />
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>
            Career Experiences:
          </Text>
          <ScrollView>
            {careerExperiences.map((experience, index) => (
              <View key={index}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Company"
                  value={experience.company}
                  onChangeText={(text) =>
                    CareerExperience_handleChange(index, "company", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Position"
                  value={experience.position}
                  onChangeText={(text) =>
                    CareerExperience_handleChange(index, "position", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Date"
                  value={experience.date}
                  onChangeText={(text) =>
                    CareerExperience_handleChange(index, "date", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Description"
                  multiline
                  numberOfLines={4}
                  value={experience.description}
                  onChangeText={(text) =>
                    CareerExperience_handleChange(index, "description", text)
                  }
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => removeExperience(index)}
                    style={{
                      backgroundColor: "red",
                      borderRadius: 10,
                      marginVertical: 10,
                      width: "50%",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        paddingVertical: 10,
                      }}
                    >
                      {" "}
                      Remove
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
          <Button title="Add Career Experience" onPress={addExperience} />
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Projects:</Text>
          <ScrollView>
            {projects.map((project, index) => (
              <View key={index}>
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Link"
                  value={project.link}
                  onChangeText={(text) =>
                    Project_handleChange(index, "link", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Name"
                  value={project.name}
                  onChangeText={(text) =>
                    Project_handleChange(index, "name", text)
                  }
                />
                <TextInput
                  style={{
                    borderWidth: 1,
                    borderColor: "gray",
                    marginBottom: 10,
                    padding: 8,
                  }}
                  placeholder="Description"
                  multiline
                  numberOfLines={4}
                  value={project.description}
                  onChangeText={(text) =>
                    Project_handleChange(index, "description", text)
                  }
                />

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Pressable
                    onPress={() => removeProject(index)}
                    style={{
                      backgroundColor: "red",
                      borderRadius: 10,
                      marginVertical: 10,
                      width: "50%",
                    }}
                  >
                    <Text
                      style={{
                        color: "white",
                        textAlign: "center",
                        paddingVertical: 10,
                      }}
                    >
                      {" "}
                      Remove
                    </Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
          <Button title="Add Project" onPress={addProject} />
        </View>

        <View style={{ flex: 1, padding: 16 }}>
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Bio Data:</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Sex"
            value={bioData.sex}
            onChangeText={(text) => BioData_handleChange("sex", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Health Status"
            value={bioData.healthStatus}
            onChangeText={(text) => BioData_handleChange("healthStatus", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Nationality"
            value={bioData.nationality}
            onChangeText={(text) => BioData_handleChange("nationality", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Language Proficiency"
            value={bioData.languageProficiency}
            onChangeText={(text) =>
              BioData_handleChange("languageProficiency", text)
            }
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Location"
            value={bioData.location}
            onChangeText={(text) => BioData_handleChange("location", text)}
          />
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "gray",
              marginBottom: 10,
              padding: 8,
            }}
            placeholder="Reference"
            value={bioData.reference}
            onChangeText={(text) => BioData_handleChange("reference", text)}
          />
        </View>
      </ScrollView>
      <Pressable
        onPress={onCancel}
        style={{ backgroundColor: "#1C3144", borderRadius: 10, marginTop: 3 }}
      >
        <Text
          style={{ color: "white", textAlign: "center", paddingVertical: 10 }}
        >
          {" "}
          Back
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    paddingBottom: 0,
    backgroundColor: "#F2F2F2",
    color: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  bioInput: {
    height: 100,
  },

  editButton: {
    marginTop: 30,
  },
});
