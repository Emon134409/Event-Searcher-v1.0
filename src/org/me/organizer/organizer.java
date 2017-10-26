/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.me.organizer;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.JOptionPane;
import org.me.LoginPage.LoginPage;

/**
 *
 * @author Shofol
 */
public class organizer extends javax.swing.JFrame {

    /**
     * Creates new form organizer
     */
    Connection conn = null;
    Statement stat = null;
    int choice;

    public organizer() {
        initComponents();

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
        name = new javax.swing.JTextField();
        emailno = new javax.swing.JTextField();
        phone = new javax.swing.JTextField();
        nid = new javax.swing.JTextField();
        ins = new javax.swing.JTextField();
        instype = new javax.swing.JComboBox();
        pass1 = new javax.swing.JPasswordField();
        pass = new javax.swing.JPasswordField();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setUndecorated(true);
        getContentPane().setLayout(new java.awt.GridBagLayout());

        jPanel1.setToolTipText("");
        jPanel1.setOpaque(false);

        name.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        name.setBorder(null);

        emailno.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        emailno.setBorder(null);

        phone.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        phone.setBorder(null);
        phone.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                phoneActionPerformed(evt);
            }
        });

        nid.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        nid.setBorder(null);

        ins.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        ins.setBorder(null);

        instype.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 14)); // NOI18N
        instype.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "University", "College", "School", "Public Office", "Private Office", "Other" }));

        pass1.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        pass1.setText("shofol");
        pass1.setBorder(null);
        pass1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                pass1ActionPerformed(evt);
            }
        });

        pass.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        pass.setText("emon09");
        pass.setBorder(null);

        jButton1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/org/me/organizer/newpackage/go.jpg"))); // NOI18N
        jButton1.setBorder(null);
        jButton1.setContentAreaFilled(false);
        jButton1.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton1ActionPerformed(evt);
            }
        });

        jButton2.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        jButton2.setForeground(new java.awt.Color(255, 255, 255));
        jButton2.setText("X");
        jButton2.setBorder(null);
        jButton2.setContentAreaFilled(false);
        jButton2.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton2ActionPerformed(evt);
            }
        });

        jButton3.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        jButton3.setForeground(new java.awt.Color(255, 255, 255));
        jButton3.setText("<-");
        jButton3.setBorder(null);
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
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                        .addGroup(jPanel1Layout.createSequentialGroup()
                            .addComponent(pass, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                            .addComponent(jButton1)
                            .addGap(64, 64, 64))
                        .addGroup(jPanel1Layout.createSequentialGroup()
                            .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                                .addComponent(name, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(pass1, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(instype, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(ins, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(nid, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(phone, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addComponent(emailno, javax.swing.GroupLayout.PREFERRED_SIZE, 414, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGap(360, 360, 360)))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addComponent(jButton3)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                        .addComponent(jButton2)
                        .addContainerGap())))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jButton2)
                    .addComponent(jButton3))
                .addGap(183, 183, 183)
                .addComponent(name, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(37, 37, 37)
                .addComponent(emailno, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                        .addComponent(jButton1))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(34, 34, 34)
                        .addComponent(phone, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(39, 39, 39)
                        .addComponent(nid, javax.swing.GroupLayout.PREFERRED_SIZE, 30, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(32, 32, 32)
                        .addComponent(ins, javax.swing.GroupLayout.PREFERRED_SIZE, 33, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(51, 51, 51)
                        .addComponent(instype, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(34, 34, 34)
                        .addComponent(pass1, javax.swing.GroupLayout.PREFERRED_SIZE, 29, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(34, 34, 34)
                        .addComponent(pass, javax.swing.GroupLayout.PREFERRED_SIZE, 31, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(0, 13, Short.MAX_VALUE)))
                .addGap(22, 22, 22))
        );

        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        getContentPane().add(jPanel1, gridBagConstraints);

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/org/me/organizer/newpackage/neworgup.jpg"))); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        getContentPane().add(jLabel1, gridBagConstraints);

        pack();
    }// </editor-fold>//GEN-END:initComponents
     public void setchoice(int i) {
        choice = i;
    }
    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed
        System.exit(1);        // TODO add your handling code here:
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed

        LoginPage a = new LoginPage();
        a.setchoice(2);
        this.dispose();
        a.setVisible(true);// TODO add your handling code here:
    }//GEN-LAST:event_jButton3ActionPerformed

    private void phoneActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_phoneActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_phoneActionPerformed

    private void pass1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_pass1ActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_pass1ActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed

        if (choice == 2) {
            String email = emailno.getText();
            boolean found = email.contains("@");
            boolean found1 = email.contains(".");

            if (found == false || found1 == false) {
                JOptionPane.showMessageDialog(null, "Incorrect email");
            } else if (pass.getText().equals(pass1.getText())) //&& found == true && found1 == true && phone.getText().toString().length() == 11) {
            {
                // JOptionPane.showMessageDialog(null, "Password  Matched and data saved");
                try {
                    Class.forName("oracle.jdbc.driver.OracleDriver");
                    Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE", "SHOFOL", "andme420");

                    String q = "INSERT INTO ORGANIZER(NAME,PASSWORD,NID,phone_no,email_id)values('" + name.getText() + "','" + pass.getText() + "','" + nid.getText() + "','" + phone.getText() + "','" + emailno.getText() + "')";
                    stat = conn.createStatement();
                    stat.executeQuery(q);

                    Object selectedItem = instype.getSelectedItem();
                    String str = selectedItem.toString();

                    String inst = ins.getText();

                    String sql = "select * from organizer_ins where name='" + inst + "'";

                    stat = conn.createStatement();

                    ResultSet rs = stat.executeQuery(sql);

                    if (rs.next()) {
                        int in_id = rs.getInt("id");

                       
                        String q2 = "update ORGANIZER set ins_id = '"+in_id+"' where name='" + name.getText()  + "'";
                        stat = conn.createStatement();
                        stat.executeQuery(q2);

                    } else {
                        String q3 = "INSERT INTO ORGANIZER_INS(NAME,TYPE) VALUES('" + ins.getText() + "','" + str + "')";

                        stat = conn.createStatement();

                        stat.executeQuery(q3);

                        String sd = "select * from organizer_ins  ";

                        stat = conn.createStatement();

                        rs = stat.executeQuery(sd);

                        int idd = 0;

                        while (rs.next()) {
                            if (rs.getString("name").equals(ins.getText())) {
                                idd = rs.getInt("id");
                            }
                        }

                        String q1 = "update ORGANIZER set ins_id = '" + idd + "' where name='" + name.getText() + "'  ";
                        stat = conn.createStatement();
                        stat.executeQuery(q1);
                    }

                    JOptionPane.showMessageDialog(null, "Data Saved");
                }
                catch (Exception e) {
                    JOptionPane.showMessageDialog(null, "Username , Mobile Number or NID is Already Taken ");
                    JOptionPane.showMessageDialog(null,e);
                }

            }
        } else {
            String email = emailno.getText();
            boolean found = email.contains("@");
            boolean found1 = email.contains(".");

            if (found == false || found1 == false) {
                JOptionPane.showMessageDialog(null, "Incorrect email");
            } else if (pass.getText().equals(pass1.getText()) && found == true && found1 == true) {
                // JOptionPane.showMessageDialog(null, "Password  Matched and data saved");
                try {
                    Class.forName("oracle.jdbc.driver.OracleDriver");
                    Connection conn = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE", "SHOFOL", "andme420");

                    Object selectedItem = instype.getSelectedItem();
                    String str = selectedItem.toString();

                    String q = "INSERT INTO SPONSOR(NAME,PASSWORD,NID,INSTYPE,SPENT,phone_no,email_id)values('" + name.getText() + "','" + pass.getText() + "','" + nid.getText() + "','" + str + "',0,'" + phone.getText() + "','" + emailno.getText() + "')";
                    stat = conn.createStatement();
                    stat.execute(q);

                    JOptionPane.showMessageDialog(null, "Data Saved");
                } catch (Exception e) {
                     JOptionPane.showMessageDialog(null, "Username , Mobile Number or NID is Already Taken ");
                }

            }

        }


    }//GEN-LAST:event_jButton1ActionPerformed

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
            java.util.logging.Logger.getLogger(organizer.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(organizer.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(organizer.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(organizer.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {

                new organizer().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextField emailno;
    private javax.swing.JTextField ins;
    private javax.swing.JComboBox instype;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTextField name;
    private javax.swing.JTextField nid;
    private javax.swing.JPasswordField pass;
    private javax.swing.JPasswordField pass1;
    private javax.swing.JTextField phone;
    // End of variables declaration//GEN-END:variables
}