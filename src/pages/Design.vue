<template>
  <Layout>
    <Headline :level="1">Schubrakede Design</Headline>

    <Subline>Das sind die Komponenten mit denen wir diese Webseite zum leben erwecken</Subline>

    <Spacer :size="2" />
    <Label>Headlines</Label>
    <Headline :level="1">Die erste Headline ist die wichtigste</Headline>
    <Spacer :size="1" />

    <Headline>Die Zweite Headline wird für Bereiche genutzt</Headline>
    <Spacer :size="1" />
    <Headline :level="3">Ich bin eine Headline nummero 3</Headline>
    <Spacer :size="1" />
    <Headline :level="4">Ich bin eine Headline nummero 4</Headline>

    <Spacer :size="2" />
    <Label>Subline</Label>
    <Subline>
      Eine Subline steht meißtens unter einer Headline 1 und erklärt ein wenig
      mehr als ihr vorgänger
    </Subline>
    <Spacer :size="2" />
    <Label>Paragraph</Label>
    <Paragraph>
      Ein Paragraph ist in der Lage einen längeren Text Lorem ipsum dolor sit
      amet consectetur adipisicing elit. Numquam quasi amet ipsa earum ex
      facilis ad porro quibusdam, blanditiis repellendus impedit, in sunt
      aliquam delectus libero? Sequi natus minus dolorum.
    </Paragraph>
    <Spacer :size="2" />
    <Label>Buttons</Label>

    <Button>Ich bin ein Primary Button</Button>
    <Spacer :size="1" />

    <Label>Link</Label>
    <AnchorLink href="schubrake.de">Ich bin ein klassischer anchor Link</AnchorLink>

    <Spacer :size="2" />
    <Label>Feature List</Label>
    <FeatureList :data="demoData.featureList" />
    <Spacer :size="2" />
    <Label>Team</Label>
    <Team :data="$page.site.teammember" />
    <Spacer :size="2" />
    <Label>Autor</Label>

    <Author
      v-for="(author, index) in $page.allAuthor.edges"
      :key="index"
      :name="author.node.name"
      :image="author.node.image"
      :description="author.node.description"
      :twitterhandle="author.node.twitterhandle"
    ></Author>
    <Spacer :size="2" />
    <Label>Referenzen</Label>
    <References :images="$page.site.companies"></References>
    <Spacer :size="2" />
    <Label>Font</Label>
    <Headline>Serenity</Headline>
    <Paragraph>
      Unsere Font heißt Serenity und wir benutzten nur Medium oder
      <b>Bold</b>
    </Paragraph>
    <Spacer :size="2" />
    <Label>Farben</Label>
    <Colors></Colors>
    <Spacer :size="2" />
    <Label>Input</Label>
    <Input placeholder="this is a placeholder" />
    <Label>Checkbox</Label>
    <Checkbox />
  </Layout>
</template>


<page-query>
query Index{
  site: site(id: "8b7eef239c7763e2ba8567c18cb858e8"){
    teammember{
      Title,
      Image,
      Name,
      Description
    },
    companies{
        Image
    }
},
allAuthor{
    edges{
      node{
        name,
        image,
        description,
        twitterhandle
      }
    }
  }

}
</page-query>


<script>
import Headline from "../components/Headline";
import Subline from "../components/Subline";
import Author from "../components/Author";
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import AnchorLink from "../components/AnchorLink";
import Colors from "../components/design/Colors";
import Spacer from "../components/Spacer";
import References from "../components/References";
import Label from "../components/Label";
import Team from "../components/Team";
import Input from "../components/Input";
import Paragraph from "../components/Paragraph";
import FeatureList from "../components/FeatureList";

export default {
  components: {
    AnchorLink,
    Paragraph,
    Button,
    References,
    Input,
    Checkbox,
    Author,
    Headline,
    Subline,
    Label,
    Team,
    Spacer,
    FeatureList,
    Colors
  },
  data() {
    return {
      demoData: {
        featureList: [
          {
            headline: "This is a headline",
            description:
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, beatae ut numquam aut dignissimos adipisci amet dolorum non dicta quo nihil enim, qui in totam ipsum omnis animi vero commodi!"
          }
        ]
      }
    };
  }
};
</script>

<style>
</style>