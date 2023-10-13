'use client';

import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import Chart from './Chart';
import ReactPDFChart from 'react-pdf-charts';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 10,
  },
  section: {
    margin: 2,
    flexGrow: 1,
  },
  grid: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text>Test</Text>
      <View style={styles.grid}>
        <View style={styles.section}>
          <ReactPDFChart>
            <Chart data={data} />
          </ReactPDFChart>
        </View>
        <View style={styles.section}>
          <ReactPDFChart>
            <Chart data={data} />
          </ReactPDFChart>
        </View>
        <View style={styles.section}>test</View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
