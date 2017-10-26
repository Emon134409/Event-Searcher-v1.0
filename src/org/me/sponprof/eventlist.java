/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.me.sponprof;

import org.me.eventlist.*;
import java.awt.Color;
import java.awt.Component;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import javax.swing.BorderFactory;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.table.DefaultTableModel;
import net.proteanit.sql.DbUtils;
import org.me.searchevent.searchevent;
import org.me.sponsorvent.sponsorevent;

/**
 *
 * @author Shofol
 */
public class eventlist extends javax.swing.JFrame {
Connection conn=null;
Statement s=null;
ResultSet r=null;
String searchedname;
int sponid;
String sname;
String password;
String stype;
    /**
     * Creates new form eventlist
     */
    public eventlist(int sid) {
        sponid=sid;
        initComponents();
       
        try
        {
        Class.forName("oracle.jdbc.driver.OracleDriver");
        Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE","SHOFOL","andme420");    
        int i=0;
        String q1="SELECT * FROM FESTSPONREQ ";
        s=conn.createStatement();
        r=s.executeQuery(q1);     

        while(r.next()){
           if( sponid== r.getInt("SPONID") ){
                Object name=r.getString("FESTID");
                eventlist.getModel().setValueAt(name, i, 0);
                i++;       
        }

        }}
        catch(Exception e){
        JOptionPane.showMessageDialog(null, e);
        }
        
        
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {
        java.awt.GridBagConstraints gridBagConstraints;

        jPanel1 = new javax.swing.JPanel();
        jScrollPane1 = new javax.swing.JScrollPane();
        eventlist = new javax.swing.JTable();
        name = new javax.swing.JLabel();
        type = new javax.swing.JLabel();
        venue = new javax.swing.JLabel();
        date = new javax.swing.JLabel();
        details = new javax.swing.JLabel();
        link = new javax.swing.JLabel();
        duration = new javax.swing.JLabel();
        image = new javax.swing.JLabel();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setUndecorated(true);
        getContentPane().setLayout(new java.awt.GridBagLayout());

        jPanel1.setOpaque(false);

        eventlist.setAutoCreateRowSorter(true);
        eventlist.setBackground(new java.awt.Color(53, 74, 95));
        eventlist.setBorder(javax.swing.BorderFactory.createBevelBorder(javax.swing.border.BevelBorder.RAISED));
        eventlist.setFont(new java.awt.Font("Berlin Sans FB", 0, 24)); // NOI18N
        eventlist.setForeground(new java.awt.Color(255, 255, 255));
        eventlist.setModel(new javax.swing.table.DefaultTableModel(
            new Object [][] {
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null},
                {null}
            },
            new String [] {
                "Event Title"
            }
        ) {
            boolean[] canEdit = new boolean [] {
                false
            };

            public boolean isCellEditable(int rowIndex, int columnIndex) {
                return canEdit [columnIndex];
            }
        });
        eventlist.setGridColor(new java.awt.Color(255, 255, 255));
        eventlist.setRowHeight(25);
        eventlist.setSelectionForeground(new java.awt.Color(255, 51, 51));
        eventlist.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseClicked(java.awt.event.MouseEvent evt) {
                eventlistMouseClicked(evt);
            }
        });
        jScrollPane1.setViewportView(eventlist);

        name.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        name.setForeground(new java.awt.Color(255, 255, 255));

        type.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        type.setForeground(new java.awt.Color(255, 255, 255));

        venue.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        venue.setForeground(new java.awt.Color(255, 255, 255));

        date.setFont(new java.awt.Font("Berlin Sans FB", 0, 24)); // NOI18N
        date.setForeground(new java.awt.Color(255, 255, 255));

        details.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        details.setForeground(new java.awt.Color(255, 255, 255));

        link.setFont(new java.awt.Font("Berlin Sans FB", 0, 36)); // NOI18N
        link.setForeground(new java.awt.Color(255, 255, 255));

        duration.setFont(new java.awt.Font("Berlin Sans FB", 0, 24)); // NOI18N
        duration.setForeground(new java.awt.Color(255, 255, 255));

        jButton1.setBackground(new java.awt.Color(255, 255, 255));
        jButton1.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        jButton1.setForeground(new java.awt.Color(255, 255, 255));
        jButton1.setText("X");
        jButton1.setAutoscrolls(true);
        jButton1.setBorder(null);
        jButton1.setContentAreaFilled(false);
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jButton2.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        jButton2.setForeground(new java.awt.Color(255, 255, 255));
        jButton2.setText("<-");
        jButton2.setBorder(null);
        jButton2.setContentAreaFilled(false);
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        jButton3.setIcon(new javax.swing.ImageIcon(getClass().getResource("/org/me/sponprof/newpackage/sponsorthis.png"))); // NOI18N
        jButton3.setContentAreaFilled(false);
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(23, 23, 23)
                                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 267, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(94, 94, 94)
                                .addComponent(image)))
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addGap(354, 354, 354)
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(link)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 584, Short.MAX_VALUE)
                                        .addComponent(jButton3))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                            .addComponent(type)
                                            .addComponent(name)
                                            .addComponent(venue)
                                            .addComponent(details)
                                            .addComponent(date))
                                        .addGap(0, 0, Short.MAX_VALUE))))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(duration)
                                .addGap(134, 134, 134))))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jButton2)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jButton1)
                .addContainerGap())
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jButton1)
                            .addComponent(jButton2))
                        .addGap(129, 129, 129)
                        .addComponent(name)
                        .addGap(36, 36, 36)
                        .addComponent(type)
                        .addGap(29, 29, 29)
                        .addComponent(venue)
                        .addGap(33, 33, 33)
                        .addComponent(duration)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(date)
                        .addGap(109, 109, 109)
                        .addComponent(details))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(120, 120, 120)
                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 413, javax.swing.GroupLayout.PREFERRED_SIZE)))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 117, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(image)
                    .addComponent(link)
                    .addComponent(jButton3))
                .addGap(35, 35, 35))
        );

        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        getContentPane().add(jPanel1, gridBagConstraints);

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/org/me/eventlist/newpackage/searchedevent.jpg"))); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        getContentPane().add(jLabel1, gridBagConstraints);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void eventlistMouseClicked(java.awt.event.MouseEvent evt) {//GEN-FIRST:event_eventlistMouseClicked
        try{
        int sr=eventlist.getSelectedRow();
        int select=Integer.parseInt(eventlist.getModel().getValueAt(sr,0).toString());
        
        Class.forName("oracle.jdbc.driver.OracleDriver");
        Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE","SHOFOL","andme420");
        
        String query="Select * from FEST";
        
        s=conn.createStatement();
        r=s.executeQuery(query);
        
        while(r.next()){
        if(r.getInt("ID")==select){
        break;
        }
        }

        name.setText(r.getString("TITLE"));
        type.setText(r.getString("TYPE"));
        date.setText(r.getString("FESTDATE"));
        venue.setText(r.getString("VENUE"));
        link.setText(r.getString("FESTLINK"));
        duration.setText(r.getString("DURATION"));
        details.setText(r.getString("SHORTDETAILS"));
        String p=r.getString("FESTIMAGE");
        
       
        ImageIcon icon = new ImageIcon(p,null);
        image.setSize(5,5);
        image.setIcon(icon);
        }
        catch(Exception e){
        //JOptionPane.showMessageDialog(null,e);
        
        }
    }//GEN-LAST:event_eventlistMouseClicked

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        System.exit(1);
    }//GEN-LAST:event_jButton1ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed

        sponprof a=new sponprof();
        a.setprofile(sname, password, sponid, stype);
        a.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed

        int sr=eventlist.getSelectedRow();
        int select=Integer.parseInt(eventlist.getModel().getValueAt(sr,0).toString());

        sponsorevent a=new sponsorevent(select,sponid);
        a.setprofile(sname, password, stype);
        a.setchoice(5);
        a.setVisible(true);
        this.dispose();
    }//GEN-LAST:event_jButton3ActionPerformed
    public void setprofile(String n,String p,String t){
    sname=n;
    password=p;
    stype=t;
    }
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(eventlist.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(eventlist.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(eventlist.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(eventlist.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                //new eventlist().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel date;
    private javax.swing.JLabel details;
    private javax.swing.JLabel duration;
    private javax.swing.JTable eventlist;
    private javax.swing.JLabel image;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel link;
    private javax.swing.JLabel name;
    private javax.swing.JLabel type;
    private javax.swing.JLabel venue;
    // End of variables declaration//GEN-END:variables
}
