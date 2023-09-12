// App.js
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Create from "./screen/Create";
import Detail, { Main_Details } from "./screen/Detail";
import newcvData, {
  MycareerExperiences,
  Mycertifications,
  data1,
  mybioData,
  myprojects,
  skills,
} from "./utilities/cvData";

export default function App() {
  const [editing, setEditing] = useState(false);
  const [cvData, setCVData] = useState(newcvData);
  const [basicinfo, setBasicinfo] = useState(data1);
  const [dataskills, setDataskills] = useState(skills);
  const [certifications, setCertifications] = useState(Mycertifications);
  const [careerExperiences, setCareerExperiences] =
    useState(MycareerExperiences);

  const [bioData, setBioData] = useState(mybioData);

  const [projects, setProjects] = useState(myprojects);
  const handleEdit = () => {
    setEditing(!editing);
  };
  console.log({ careerExperiences });

  const handleUpdate = (updatedData) => {
    setCVData(updatedData);
  };

  return (
    <View style={styles.container}>
      {editing ? (
        <Create
          cvData={cvData}
          onUpdate={handleUpdate}
          onCancel={handleEdit}
          dataskills={dataskills}
          setDataskills={setDataskills}
          basicinfo={basicinfo}
          setBasicinfo={setBasicinfo}
          certifications={certifications}
          setCertifications={setCertifications}
          careerExperiences={careerExperiences}
          setCareerExperiences={setCareerExperiences}
          projects={projects}
          setProjects={setProjects}
          bioData={bioData}
          setBioData={setBioData}
        />
      ) : (
        <Detail
          cvData={cvData}
          onEdit={handleEdit}
          dataskills={dataskills}
          basicinfo={basicinfo}
          certifications={certifications}
          careerExperiences={careerExperiences}
          projects={projects}
          bioData={bioData}
          setBioData={setBioData}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});
