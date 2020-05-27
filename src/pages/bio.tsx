import React, { FC, Fragment } from 'react'
import Layout from '../layouts'
import { ScrollView, View } from 'react-native'
import { Paragraph, Headline, Subheading, Title } from 'react-native-paper'
import useDimentions from '../utils/useDimentions'
import { Footer } from '../layouts/HeaderFooter'

export default (props: any) => {
  const dimensions = useDimentions()
  return (
    <Layout {...props}>
      <View style={{ position: "absolute", ...dimensions, zIndex: -100 }}>
        <ScrollView style={{ paddingTop: 100, paddingLeft: "15%", paddingRight: "15%", paddingBottom: 16 }}>
          <Headline style={{ paddingBottom: 30 }}>BIO</Headline>
          <Paragraph style={{ color: "grey", paddingTop: 16, paddingBottom: 30 }}>{aboutLiana}</Paragraph>
          <Awards/>
          <Exhibitions />
          <Footer />
        </ScrollView>
      </View>
    </Layout>
  )
}

const Year: FC = ({ children }) => <Title style={{ fontSize: 14 }}>{children}</Title>
const CopyParagraph: FC = ({ children }) => <Paragraph style={{ color: "grey" }}>{children}</Paragraph>

const Awards = () => (
  <View style={{marginBottom:30}}>
    <Subheading style={{marginBottom:16}}>Awards and Qualifications</Subheading>
    <CopyParagraph>   ○ BA Honours Drawing and Painting, Edinburgh College of Art: 2010</CopyParagraph>
    <CopyParagraph>   ○ Derwent Drawing Prize: 2013, 2018, 2020</CopyParagraph>
    <CopyParagraph>   ○ Pre-selected for Threadneedle Prize: 2011, 2012</CopyParagraph>
    <CopyParagraph>   ○ Jerwood Drawing Prize: 2010</CopyParagraph>
    <CopyParagraph>   ○ Leith School of Art: 2004 - 2006</CopyParagraph>
    <CopyParagraph>   ○ Friends of Leith Award CarParks Series: 2006</CopyParagraph>
    <CopyParagraph>   ○ LeithLate Commitee Member: 2010 - Present</CopyParagraph>
  </View>
)

const Exhibitions = () => (
  <View style={{paddingBottom:30}}>
    <Subheading style={{ marginBottom: 16 }}>Exhibitions</Subheading>
    <Year>2020</Year>
    <CopyParagraph>   ○ Derwent drawing prize / LONDON / virtual exhibiton / April</CopyParagraph>
    <Year>2018</Year>
    <CopyParagraph>   ○ Derwent Drawing Prize / Group Show / Pall Mall Galleries / London / September</CopyParagraph>
    <CopyParagraph>   ○ Untitled / Group Show with Gordon Simpson / Whitespace gallery / Edinbugh / November</CopyParagraph>
    <CopyParagraph>   ○ O U T A G E - DOK / The Steel Shed / EDINBURGH / Solo Show / April</CopyParagraph>
    <Year>2016</Year>
    <CopyParagraph>   ○ Royal Scottish Academy / Open Exhibition / August - September</CopyParagraph>
    <CopyParagraph>   ○ Royal Scottish Academy - Open Exhibition - Jan - March</CopyParagraph>
    <Year>2014</Year>
    <CopyParagraph>   ○ Mirror and Mires -Patriot Hall Gallery Edinburgh / Sept</CopyParagraph>
    <CopyParagraph>   ○ SEEP - an art exhibition that Cachin are producing at The Media Education - Edinburgh / February / LGBT</CopyParagraph>
    <CopyParagraph>   ○ Citizen Curator:Discover Leith's Centre Artistic Heritage / Group Show / City Art Centre / Edinburgh / Oct -Feb</CopyParagraph>
    <Year>2013</Year>
    <CopyParagraph>   ○ Derwent Drawing Prize / Group Show / Pall Mall Galleries/ London / September</CopyParagraph>
    <CopyParagraph>   ○ Shutter Art Project / LeithLate / June - Ongoing</CopyParagraph>
    <Year>2012</Year>
    <CopyParagraph>   ○ Persevere / Group Show - with Rabiya Choudhry & Bernie Reid / Old Ambulance Depot / Edinburgh / April</CopyParagraph>
    <Year>2011</Year>
    <CopyParagraph>   ○ Whitelines / Group Show / Whitespace Gallery/Edinburgh / February</CopyParagraph>
    <Year>2010</Year>
    <CopyParagraph>   ○ Jerwood Drawing Prize 2010/ Group Show / Jerwood Gallery / London / Sept - April 2011</CopyParagraph>
    <CopyParagraph>   ○ ECA Degree Show / Group show / June</CopyParagraph>
    <CopyParagraph>   ○ Meathook / Group show / ECA / January</CopyParagraph>
    <Year>2009</Year>
    <CopyParagraph>   ○ Poppycock / Group show / ECA / February</CopyParagraph>
    <CopyParagraph>   ○ Filmstrips / Group show / Filmhouse Cinema / Nov - Dec</CopyParagraph>
    <Year>2008</Year>
    <CopyParagraph>   ○ Organic Concrete / Selective show / Victoria's Bar / Oct - Dec</CopyParagraph>
    <CopyParagraph>   ○ Spine / Group show / Owl and Lion Gallery / June</CopyParagraph>
    <CopyParagraph>   ○ Second Nature / Group show / Richard Demarco's Skateraw Gallery / June</CopyParagraph>
    <CopyParagraph>   ○ XEJN / Group show / ECA / March</CopyParagraph>
    <CopyParagraph>   ○ N.E.W New Edinburgh Work / Group show / ECA / Jan</CopyParagraph>
    <Year> 2007</Year>
    <CopyParagraph>   ○ 30x30 / Group show / Chessels Gallery / November</CopyParagraph>
  </View>
)

const aboutLiana = "Liana Moran’s work has a historical context and comments on technology, waste and mass usage. Featuring often recognisable objects documented in painting, drawing and sculpture, she creates manufactured landscapes, idealising technology and sustainability. She was shortlisted for The Derwent and Jerwood Drawing Prize and exhibits widely. "

