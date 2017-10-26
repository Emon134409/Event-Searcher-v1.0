/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package org.me.createevent;
import java.io.File;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.swing.ImageIcon;
import javax.swing.JFileChooser;
import javax.swing.JOptionPane;
import org.me.orgmenu.organizermenu;

/**
 *
 * @author Shofol
 */
public class createevent extends javax.swing.JFrame {

    /**
     * Creates new form createevent
     */
    private String fname;
    private String password;
    private String filename;
    private int id = 0;
    private int oid=0;
    
    int idd;
    public createevent(int idd) {
        initComponents();
        
        this.idd=idd;
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
        venue = new javax.swing.JTextField();
        duration = new javax.swing.JTextField();
        jScrollPane1 = new javax.swing.JScrollPane();
        details = new javax.swing.JTextArea();
        emailno = new javax.swing.JTextField();
        eventtype = new javax.swing.JComboBox();
        jButton1 = new javax.swing.JButton();
        jButton2 = new javax.swing.JButton();
        jButton3 = new javax.swing.JButton();
        fname1 = new javax.swing.JTextField();
        photo = new javax.swing.JLabel();
        image = new javax.swing.JButton();
        date = new javax.swing.JTextField();
        path = new javax.swing.JLabel();
        jLabel1 = new javax.swing.JLabel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);
        setUndecorated(true);
        getContentPane().setLayout(new java.awt.GridBagLayout());

        jPanel1.setOpaque(false);

        venue.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        venue.setBorder(null);

        duration.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        duration.setBorder(null);

        details.setColumns(20);
        details.setFont(new java.awt.Font("NSimSun", 0, 13)); // NOI18N
        details.setRows(5);
        details.setText(" ");
        details.setBorder(null);
        jScrollPane1.setViewportView(details);

        emailno.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        emailno.setBorder(null);
        emailno.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                emailnoActionPerformed(evt);
            }
        });

        eventtype.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        eventtype.setModel(new javax.swing.DefaultComboBoxModel(new String[] { "Competitive", "Awareness", "Online", " " }));
        eventtype.setBorder(null);

        jButton1.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 24)); // NOI18N
        jButton1.setForeground(new java.awt.Color(255, 255, 255));
        jButton1.setText("X");
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

        jButton3.setIcon(new javax.swing.ImageIcon(getClass().getResource("/org/me/createevent/newpackage/button.png"))); // NOI18N
        jButton3.setBorder(null);
        jButton3.setBorderPainted(false);
        jButton3.setContentAreaFilled(false);
        jButton3.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                jButton3ActionPerformed(evt);
            }
        });

        fname1.setFont(new java.awt.Font("Berlin Sans FB Demi", 0, 18)); // NOI18N
        fname1.setBorder(null);

        image.setText("Attach Image");
        image.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                imageActionPerformed(evt);
            }
        });

        date.setFont(new java.awt.Font("Berlin Sans FB", 0, 24)); // NOI18N
        date.setText("dd/mm/yyyy");
        date.setBorder(null);

        path.setText("photo path");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(693, 693, 693)
                        .addComponent(jButton3))
                    .addComponent(eventtype, javax.swing.GroupLayout.PREFERRED_SIZE, 649, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(39, 39, 39))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(70, 70, 70)
                .addComponent(photo)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 439, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                        .addComponent(venue, javax.swing.GroupLayout.PREFERRED_SIZE, 628, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addComponent(date, javax.swing.GroupLayout.PREFERRED_SIZE, 309, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                                .addComponent(duration, javax.swing.GroupLayout.PREFERRED_SIZE, 101, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addGap(275, 275, 275))
                            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(jButton2)
                                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(emailno, javax.swing.GroupLayout.PREFERRED_SIZE, 628, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(196, 196, 196))
                                    .addGroup(jPanel1Layout.createSequentialGroup()
                                        .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 636, javax.swing.GroupLayout.PREFERRED_SIZE)
                                        .addGap(196, 196, 196)))
                                .addComponent(jButton1)
                                .addContainerGap())
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(image, javax.swing.GroupLayout.PREFERRED_SIZE, 134, javax.swing.GroupLayout.PREFERRED_SIZE)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                                .addComponent(path)
                                .addContainerGap())))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                        .addComponent(fname1, javax.swing.GroupLayout.PREFERRED_SIZE, 628, javax.swing.GroupLayout.PREFERRED_SIZE)
                        .addGap(222, 222, 222))))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jButton1)
                    .addComponent(jButton2))
                .addGap(78, 78, 78)
                .addComponent(fname1, javax.swing.GroupLayout.PREFERRED_SIZE, 37, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(32, 32, 32)
                .addComponent(eventtype, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(34, 34, 34)
                .addComponent(venue, javax.swing.GroupLayout.PREFERRED_SIZE, 36, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(36, 36, 36)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(duration, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(date, javax.swing.GroupLayout.PREFERRED_SIZE, 32, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addGap(38, 38, 38)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 129, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(29, 29, 29)
                .addComponent(emailno, javax.swing.GroupLayout.PREFERRED_SIZE, 35, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(1, 1, 1)
                .addComponent(photo)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 33, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(image, javax.swing.GroupLayout.PREFERRED_SIZE, 46, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(path))
                .addGap(17, 17, 17)
                .addComponent(jButton3)
                .addGap(22, 22, 22))
        );

        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        getContentPane().add(jPanel1, gridBagConstraints);

        jLabel1.setIcon(new javax.swing.ImageIcon(getClass().getResource("/org/me/createevent/newpackage/createevent.jpg"))); // NOI18N
        gridBagConstraints = new java.awt.GridBagConstraints();
        gridBagConstraints.gridx = 1;
        gridBagConstraints.gridy = 1;
        gridBagConstraints.fill = java.awt.GridBagConstraints.BOTH;
        getContentPane().add(jLabel1, gridBagConstraints);

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void imageActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_imageActionPerformed
        JFileChooser chooser=new JFileChooser();
        chooser.showOpenDialog(null);
        File f=chooser.getSelectedFile();
        filename=f.getAbsolutePath();
        path.setText(filename);

        String p=path.getText();

    }//GEN-LAST:event_imageActionPerformed

    private void jButton3ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton3ActionPerformed
          SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy");
            String day=date.getText();
            java.util.Date eventday = null;
        try {
            eventday = formatter.parse(day);
        } catch (ParseException ex) {
            Logger.getLogger(createevent.class.getName()).log(Level.SEVERE, null, ex);
        }
            
            java.util.Date today=new java.util.Date();
            
            Calendar c = Calendar.getInstance(); 
            c.setTime(today); 
                       
            if(eventday.after(today) &&  emailno.getText().contains(".")){
        try{
            Object selectedItem= eventtype.getSelectedItem();
            String str=selectedItem.toString();
            
          
            Class.forName("oracle.jdbc.driver.OracleDriver");
            Connection conn= DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521/XE","SHOFOL","andme420");

            ResultSet rs=null;

            Statement stat=null;

            String str1=date.getText();

            String q1="SELECT * FROM ORGANIZER";
            stat=conn.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE,ResultSet.CONCUR_UPDATABLE);
            rs=stat.executeQuery(q1);

            
            String id1 = null;
            String instype = null;
            
            while(rs.next()){
                String n=rs.getString("NAME");
                String p=rs.getString("PASSWORD");
                if(n.equals(fname) && p.equals(password)){
                    id1=rs.getString("ID");
                    oid=rs.getInt("INS_ID");
                    break;
                }
            }
                 id=Integer.parseInt(id1);//organizer's id
            
            String q2="SELECT * FROM ORGANIZER_INS";
            stat=conn.createStatement();
            rs=stat.executeQuery(q2);
            while(rs.next()){
                int sid=rs.getInt("ID");
                if(oid==sid){
                    instype=rs.getString("TYPE");
                    break;
                }
            }

            String q="INSERT INTO FEST(TITLE,TYPE,FESTDATE,VENUE,FESTLINK,DURATION,SHORTDETAILS,ORGID,FESTIMAGE,INS_TYPE)values"
            + "('"+fname1.getText()+"','"+str+"','"+str1+"','"+venue.getText()+"','"+emailno.getText()+"',"
            + ""+Integer.parseInt(duration.getText())+",'"+details.getText()+"',"+id+",'"+path.getText()+"','"+instype+"')";

            stat=conn.createStatement();
            stat.executeQuery(q);

           ;

            //      String q2="INSERT INTO FEST(FESTIMAGE)values(@festimage)";
            //      stat=conn.createStatement();
            //      stat.executeQuery(q2);

            JOptionPane.showMessageDialog(null,"Data Saved");
        }
        catch(Exception ex){
            //         System.err.print(ex);
           
            JOptionPane.showMessageDialog(null, "Event Name is Already Choosen .Try Another One");
        }}
            else{
            JOptionPane.showMessageDialog(null,"Error in date or fest link");
            }
    }//GEN-LAST:event_jButton3ActionPerformed

    private void jButton2ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton2ActionPerformed

        organizermenu a=new organizermenu(idd);
        this.dispose();
        a.setVisible(true);
    }//GEN-LAST:event_jButton2ActionPerformed

    private void jButton1ActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_jButton1ActionPerformed
        System.exit(1);
    }//GEN-LAST:event_jButton1ActionPerformed

    private void emailnoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_emailnoActionPerformed
        // TODO add your handling code here:
    }//GEN-LAST:event_emailnoActionPerformed
    public void setprofile(String n,String p){
    fname=n;
    password=p;
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
            java.util.logging.Logger.getLogger(createevent.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(createevent.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(createevent.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(createevent.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
               // new createevent().setVisible(true);
            }
        });
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JTextField date;
    private javax.swing.JTextArea details;
    private javax.swing.JTextField duration;
    private javax.swing.JTextField emailno;
    private javax.swing.JComboBox eventtype;
    private javax.swing.JTextField fname1;
    private javax.swing.JButton image;
    private javax.swing.JButton jButton1;
    private javax.swing.JButton jButton2;
    private javax.swing.JButton jButton3;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JLabel path;
    private javax.swing.JLabel photo;
    private javax.swing.JTextField venue;
    // End of variables declaration//GEN-END:variables

}