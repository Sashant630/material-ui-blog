import { ThemeProvider, createTheme, Grid } from "@mui/material";
import { Container } from "@mui/system";
import "./App.css";
import FeaturedPost from "./components/FeaturedPost";
import Header from "./components/Header";
import PostCard from "./components/PostCard";
import { featuredPosts, sidebar } from "./data/Data";
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Footer from "./components/Footer";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost/>
        <br />
        <Grid container spacing={4}>
          {
            featuredPosts.map((post) => (
                <PostCard post={post} key={post.title} />
            ))}
        </Grid>
        <Grid container spacing={5}> 
        <Main title="From the Firehose"/>
        <Sidebar 
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
        </Grid>
      </Container>
      <Footer 
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}

export default App;
