import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 10,
    fontFamily: "Helvetica",
    lineHeight: 1.5,
    color: "#1f2937", // slate-800
  },
  header: {
    borderBottomWidth: 2,
    borderBottomColor: "#2563eb",
    paddingBottom: 10,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    textTransform: "uppercase",
  },
  role: {
    fontSize: 14,
    color: "#2563eb",
    marginTop: 12,
    fontWeight: "bold",
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 8,
    fontSize: 9,
    color: "#4b5563",
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    backgroundColor: "#f3f4f6",
    padding: 4,
    textTransform: "uppercase",
    borderLeftWidth: 3,
    borderLeftColor: "#2563eb",
    marginBottom: 8,
  },
  skillGroup: {
    marginBottom: 5,
  },
  skillTitle: {
    fontWeight: "bold",
    fontSize: 10,
  },
  project: {
    marginBottom: 12,
  },
  projectHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: "bold",
  },
  techText: {
    fontSize: 9,
    color: "#2563eb",
    marginTop: 2,
  },
  bullet: {
    marginLeft: 10,
    marginTop: 3,
  },
  Link: {
    paddingLeft: 8,
  },
  Text: {
    paddingLeft: 3,
  },
});

export const CvPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* HEADER BASADO EN LA IMAGEN */}
      <View style={styles.header}>
        <Text style={styles.name}>Jhon Jairo Dueñas Vega</Text>
        <Text style={styles.role}>
          Ingeniero de Sistemas | Fullstack Developer
        </Text>

        <View style={styles.contactRow}>
          <Link src="mailto:jairo_251180@hotmail.com">
            jairo_251180@hotmail.com
          </Link>
          <Text style={styles.Text}> • 3206515236 • Colombia | Remoto • </Text>
          <Link src="https://portafolio-react-rose.vercel.app/">
            Portafolio Web
          </Link>
          <Link style={styles.Link} src="https://cv-jairo.vercel.app/">
            CV Web
          </Link>
        </View>
      </View>

      {/* STACK TÉCNICO - MÁS VISUAL */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Habilidades Técnicas</Text>

        <View style={styles.skillGroup}>
          <Text style={styles.skillTitle}>Frontend:</Text>
          <Text>React, Vite, JavaScript, Tailwind CSS, HTML5, CSS3</Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillTitle}>Backend / DB:</Text>
          <Text>Supabase, PostgreSQL, Node.js</Text>
        </View>

        <View style={styles.skillGroup}>
          <Text style={styles.skillTitle}>Herramientas:</Text>
          <Text>Git, GitHub, Vercel, VS Code</Text>
        </View>
      </View>

      {/* IDIOMAS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Idiomas</Text>
        <Text>Español: Nativo</Text>
        <Text>Inglés: A2</Text>
      </View>

      {/* PERFIL PROFESIONAL */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Perfil Profesional</Text>
        <Text>
          Ingeniero de Sistemas enfocado en desarrollo de aplicaciones web
          modernas con React y Vite. Experiencia construyendo interfaces
          rápidas, consumo de APIs y backend serverless con Supabase. Apasionado
          por crear soluciones eficientes, escalables y con excelente
          experiencia de usuario.
        </Text>
      </View>

      {/* PROYECTOS DESTACADOS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Proyectos Destacados</Text>

        <View style={styles.project}>
          <Text style={{ fontWeight: "bold" }}>App Control de Gastos</Text>
          <Text style={styles.techText}>React, Vite, Supabase, PostgreSQL</Text>
          <Text style={{ marginTop: 3 }}>
            Aplicación web para gestión de finanzas personales con
            autenticación, gráficos en tiempo real y almacenamiento en base de
            datos.
          </Text>
          <Link
            src="https://control-gastos-react-vite-one.vercel.app/login"
            style={{ color: "#2563eb", fontSize: 9, marginTop: 2 }}
          >
            Ver Demo / Código
          </Link>
        </View>

        <View style={styles.project}>
          <Text style={{ fontWeight: "bold" }}>Pokédex App</Text>
          <Text style={styles.techText}>
            React, API REST, Styled-components
          </Text>
          <Text style={{ marginTop: 3 }}>
            Aplicación interactiva para explorar Pokémon de la primera
            generación con filtros dinámicos y diseño responsive.
          </Text>
          <Link
            src="https://react-pokemons-gamma.vercel.app/home"
            style={{ color: "#2563eb", fontSize: 9, marginTop: 2 }}
          >
            Ver Demo / Código
          </Link>
        </View>
      </View>

      {/* EXPERIENCIA */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}> Experiencia Laboral</Text>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontWeight: "bold" }}>
            Desarrollador Web Freelance
          </Text>
          <Text>2023 - Actualidad</Text>
        </View>
        <Text style={styles.bullet}>
          • Desarrollo de aplicaciones web con React, integración con APIs y
          despliegue en Vercel.
        </Text>
      </View>

      {/* FOOTER */}
      <View
        style={{
          marginTop: 30,
          borderTopWidth: 0.5,
          borderTopColor: "#ccc",
          paddingTop: 5,
        }}
      >
        <Text style={{ fontSize: 8, textAlign: "center", color: "#9ca3af" }}>
          Generado con React + Vite + Tailwind CSS | 2026
        </Text>
      </View>
    </Page>
  </Document>
);
