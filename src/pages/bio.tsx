import React from 'react'
import Layout from '../layouts'
import { ScrollView, View } from 'react-native'
import { Paragraph, Headline, Subheading } from 'react-native-paper'
import useDimentions from '../utils/useDimentions'
import { Footer } from '../layouts/HeaderFooter'

export default (props: any) => {
  const dimensions = useDimentions()
  return (
      <Layout {...props}>
        <View style={{position:"absolute", ...dimensions, zIndex:-100}  }>
          <ScrollView style={{paddingTop: 100, paddingLeft:"15%", paddingRight:"15%", paddingBottom:16}}contentInset={{top:120}}>
            <Headline style={{paddingBottom: 60}}>Bio</Headline>
            <Paragraph style={{color:"grey", paddingTop:16, paddingBottom: 60}}>{aboutLiana}</Paragraph>
            <Subheading >Awards and Qualifications</Subheading>
            <Paragraph style={{color:"grey", paddingTop:16, paddingBottom: 60}}>{content1}</Paragraph>
            <Subheading>Exhibitions</Subheading>
            <Paragraph style={{color:"grey", paddingTop:16, paddingBottom:16}}>{content2}</Paragraph>
            <Footer/>
          </ScrollView>
        </View>
    </Layout>
  ) 
}

const content1 = `BA Honours Drawing and Painting - Edinburgh College of Art 2010\n
Derwent Drawing Prize  - 2013 / 2018 / 2020$\n
Pre-selected for Threadneedle Prize 2011/2012\n
Jerwood Drawing Prize  - 2010\n
Leith School of Art  2004 - 2006\n
Friends of Leith Award - CarParks Series 2006\n
LeithLate Commitee Member 2010 - Present
`

const content2 = `2020\n
Derwent drawing prize / LONDON / virtual exhibiton / April\n
2018\n
Derwent Drawing Prize /Group Show /Pall Mall Galleries/ London / September\n
Untitled / Group Show with Gordon Simpson  / Whitespace gallery / Edinbugh / November\n
O U T A G E - DOK / The Steel Shed / EDINBURGH / Solo Show / April\n
2016\n
Royal Scottish Academy / Open Exhibition / August - September\n
Royal Scottish Academy - Open Exhibition - Jan - March\n
2014\n
Mirror and Mires -Patriot Hall Gallery Edinburgh / Sept\n
SEEP - an art exhibition that Cachin are producing at The Media Education - Edinburgh / February / LGBT\n
2014\n
Citizen Curator:Discover Leith's Centre Artistic Heritage / Group Show / City Art Centre / Edinburgh / Oct -Feb\n
2013\n
Derwent Drawing Prize /Group Show /Pall Mall Galleries/ London / September\n
Shutter Art Project / LeithLate / June - Ongoing\n
2012\n
Persevere / Group Show - with Rabiya Choudhry & Bernie Reid / Old Ambulance Depot / Edinburgh / April\n
2011\n
Whitelines / Group Show / Whitespace Gallery/Edinburgh / February\n
2010 - 2011\n
Jerwood Drawing Prize 2010/ Group Show / Jerwood Gallery / London / Sept - April 2011\n
ECA Degree Show / Group show / June\n
Meathook / Group show / ECA / January\n
2009\n
Poppycock / Group show / ECA / February\n
Filmstrips / Group show / Filmhouse Cinema / Nov - Dec\n
2008\n
Organic Concrete / Selective show / Victoria's Bar / Oct - Dec\n
Spine / Group show / Owl and Lion Gallery / June\n
Second Nature / Group show / Richard Demarco's Skateraw Gallery / June\n
XEJN / Group show / ECA / March\n
N.E.W New Edinburgh Work / Group show / ECA / Jan\n
2007\n
30x30 / Group show / Chessels Gallery / November`

const aboutLiana = "Liana Moran’s work has a historical context and comments on technology, waste and mass usage. Featuring often recognisable objects documented in painting, drawing and sculpture, she creates manufactured landscapes, idealising technology and sustainability. She was shortlisted for The Derwent and Jerwood Drawing Prize and exhibits widely. "

