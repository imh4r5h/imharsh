ALTER TRIGGER [dbo].[triggerAuditlog] ON [dbo].[tblApplicants] 
	AFTER UPDATE,INSERT 
AS 
BEGIN
   INSERT INTO Audit_log
   SELECT i.id,GETUTCDATE() from tblApplicants a INNER JOIN inserted i ON a.id=i.id; 
   END
