import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer"
import {Table, TableHeader, TableBody, TableCell, DataTableCell} from '@david.kucsai/react-pdf-table'
import NewWindow from 'react-new-window'

const ManageCompletedHires = ({hire}) => {

    const styles = StyleSheet.create({
        page: {
          height: "100%",
        },
        table: {
              paddingLeft: "20px",
              paddingRight: "20px",
        },

        section: {
            flexDirection: "row",
            paddingTop: '10px',
            paddingLeft: '20px'
        },

        tableSection: {
            flexDirection: "row",
            paddingTop: '5px',
            paddingLeft: "20px",
            paddingRight: "20px",
        },

        heading: {
            flexDirection: "row",
            textAlign: 'center',
            paddingTop: '10px'
        },

    });

    const MyDocument = hire.hireType === "import" ? (
        <Document>
            <Page style={styles.page}>
                <View style={styles.heading}>
                    <Text>Trans Global Logistics</Text>
                </View >
                <View style={styles.section}>
                    <Text>Container Details</Text>
                </View >
                <View style={styles.tableSection}>
                    <Table style={styles.table}
                        data={[
                            {id: hire.id, type: hire.containerType, pickupLocation: hire.pickupLocation}
                        ]} 
                    >
                        <TableHeader> 
                            <TableCell>
                                Hire ID
                            </TableCell>
                            <TableCell>
                                Container Type
                            </TableCell>
                            <TableCell>
                                Pickup Location
                            </TableCell>
                        </TableHeader>
                        <TableBody>
                            <DataTableCell getContent={(r) => r.id}/>
                            <DataTableCell getContent={(r) => r.type}/>
                            <DataTableCell getContent={(r) => r.pickupLocation}/>
                        </TableBody>
                    </Table>
                </View>
                <View style={styles.section}>
                    <Text>Container Details</Text>
                </View >
                <View style={styles.tableSection}>
                    <Table style={styles.table}
                        data={[
                            {id: hire.id, type: hire.containerType, pickupLocation: hire.pickupLocation}
                        ]} 
                    >
                        <TableHeader> 
                            <TableCell>
                                Hire ID
                            </TableCell>
                            <TableCell>
                                Container Type
                            </TableCell>
                            <TableCell>
                                Pickup Location
                            </TableCell>
                        </TableHeader>
                        <TableBody>
                            <DataTableCell getContent={(r) => r.id}/>
                            <DataTableCell getContent={(r) => r.type}/>
                            <DataTableCell getContent={(r) => r.pickupLocation}/>
                        </TableBody>
                    </Table>
                </View>
            </Page>
        </Document>

    ) : <Document>
          <Page style={styles.page}>
            <View style={styles.section}>
              <Text>Container Details</Text>
            </View >
            <View style={styles.tableSection}>
            <Table style={styles.table}
                    data={[
                        {id: hire.id, lastName: "Smith", dob: new Date(2000, 1, 1), country: "Australia", phoneNumber: "xxx-0000-0000"}
                    ]} 
                >
                    <TableHeader> 
                        <TableCell>
                            First Name
                        </TableCell>
                        <TableCell>
                            Last Name
                        </TableCell>
                        <TableCell>
                            DOB
                        </TableCell>
                        <TableCell>
                            Country
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <DataTableCell getContent={(r) => r.id}/>
                        <DataTableCell getContent={(r) => r.lastName}/>
                        <DataTableCell getContent={(r) => r.dob.toLocaleString()}/>
                        <DataTableCell getContent={(r) => r.country}/>
                    </TableBody>
                </Table>
            </View>
            </Page>

        </Document> 

    
    return (
        <NewWindow>
            <PDFViewer style={{width:"100%", height:"100%"}}>{MyDocument}</PDFViewer>
        </NewWindow>
    )
} 

export default ManageCompletedHires